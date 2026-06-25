"use client";

import { useEffect, useState, useCallback } from "react";
import { adminField, adminLabel, Btn, Card, useToast } from "../_ui";
import {
  getGallery,
  saveGalleryItem,
  deleteGalleryItem,
  type GalleryItem,
} from "../../lib/content";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET;

type CloudinaryWidget = { open: () => void };
type CloudinaryGlobal = {
  createUploadWidget: (
    opts: Record<string, unknown>,
    cb: (err: unknown, result: { event: string; info: { secure_url: string; resource_type: string } }) => void
  ) => CloudinaryWidget;
};

function loadCloudinary(): Promise<CloudinaryGlobal | null> {
  return new Promise((resolve) => {
    if (!CLOUD || !PRESET) return resolve(null);
    const w = window as unknown as { cloudinary?: CloudinaryGlobal };
    if (w.cloudinary) return resolve(w.cloudinary);
    const s = document.createElement("script");
    s.src = "https://upload-widget.cloudinary.com/global/all.js";
    s.onload = () => resolve(w.cloudinary ?? null);
    s.onerror = () => resolve(null);
    document.body.appendChild(s);
  });
}

export default function GalleryAdmin() {
  const { show, node } = useToast();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setItems(await getGallery());
    setLoading(false);
  }, []);

  useEffect(() => {
    getGallery()
      .then((g) => {
        setItems(g);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const update = (i: number, patch: Partial<GalleryItem>) =>
    setItems((arr) => arr.map((it, j) => (j === i ? { ...it, ...patch } : it)));

  const upload = async (i: number) => {
    const c = await loadCloudinary();
    if (!c) {
      show("Cloudinary não configurado. Cole o URL manualmente.", "err");
      return;
    }
    const widget = c.createUploadWidget(
      { cloudName: CLOUD, uploadPreset: PRESET, sources: ["local", "url", "camera"], multiple: false },
      (err, result) => {
        if (!err && result?.event === "success") {
          const isVideo = result.info.resource_type === "video";
          update(i, { url: result.info.secure_url, type: isVideo ? "video" : "img" });
          show("Ficheiro carregado. Não esqueça de guardar.");
        }
      }
    );
    widget.open();
  };

  const remove = async (i: number) => {
    const it = items[i];
    if (!confirm("Remover este item da galeria?")) return;
    if (it.id) {
      try { await deleteGalleryItem(it.id); } catch { show("Falha ao remover.", "err"); return; }
    }
    setItems((arr) => arr.filter((_, j) => j !== i));
    show("Item removido.");
  };

  const saveAll = async () => {
    setSaving(true);
    try {
      await Promise.all(items.map((it, idx) => saveGalleryItem({ ...it, order: idx })));
      show("Galeria guardada.");
      await load();
    } catch {
      show("Falha ao guardar.", "err");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-sm text-muted">A carregar galeria…</p>;

  return (
    <div className="pb-24">
      {node}
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Galeria</p>
          <h1 className="font-serif text-4xl font-light text-fg">Fotos & vídeos</h1>
        </div>
        <Btn variant="ghost" onClick={() => setItems((a) => [...a, { order: a.length, type: "img", url: "" }])}>
          + Adicionar
        </Btn>
      </header>

      {!CLOUD && (
        <Card className="mb-5">
          <p className="text-sm text-muted">
            Para carregar ficheiros diretamente, configure o Cloudinary em
            <code className="text-gold"> .env.local</code>. Sem isso, pode usar URLs
            de imagens/vídeos (ex.: ficheiros em <code className="text-gold">/media/…</code>).
          </p>
        </Card>
      )}

      <div className="space-y-4">
        {items.map((it, i) => (
          <Card key={it.id ?? i}>
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Pré-visualização */}
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-[3px] border border-line-soft bg-surface">
                {it.url ? (
                  it.type === "video" ? (
                    <video src={it.url} className="h-full w-full object-cover" muted />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={it.url} alt="" className="h-full w-full object-cover" />
                  )
                ) : (
                  <div className="grid h-full place-items-center text-xs text-faint">sem media</div>
                )}
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap gap-3">
                  <div>
                    <label className={adminLabel}>Tipo</label>
                    <select className={`${adminField} w-32`} value={it.type} onChange={(e) => update(i, { type: e.target.value as "img" | "video" })}>
                      <option value="img">Imagem</option>
                      <option value="video">Vídeo</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className={adminLabel}>URL</label>
                    <input className={adminField} value={it.url} placeholder="https://… ou /media/…" onChange={(e) => update(i, { url: e.target.value })} />
                  </div>
                </div>
                {it.type === "video" ? (
                  <div>
                    <label className={adminLabel}>Poster (imagem de capa, opcional)</label>
                    <input className={adminField} value={it.poster ?? ""} onChange={(e) => update(i, { poster: e.target.value })} />
                  </div>
                ) : (
                  <div>
                    <label className={adminLabel}>Texto alternativo (descrição)</label>
                    <input className={adminField} value={it.alt ?? ""} onChange={(e) => update(i, { alt: e.target.value })} />
                  </div>
                )}
                <div className="flex gap-2">
                  <Btn variant="ghost" onClick={() => upload(i)}>Carregar ficheiro</Btn>
                  <Btn variant="danger" onClick={() => remove(i)}>Remover</Btn>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3 md:px-10">
          <p className="text-xs text-muted">{items.length} itens</p>
          <Btn onClick={saveAll} disabled={saving}>{saving ? "A guardar…" : "Guardar galeria"}</Btn>
        </div>
      </div>
    </div>
  );
}
