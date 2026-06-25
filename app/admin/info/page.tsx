"use client";

import { useEffect, useState } from "react";
import { adminField, adminLabel, Btn, Card, useToast } from "../_ui";
import { getSiteConfig, saveSiteConfig, type SiteConfig } from "../../lib/content";

function Field({ label, value, onChange, ...rest }: { label: string; value: string; onChange: (v: string) => void } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">) {
  return (
    <div>
      <label className={adminLabel}>{label}</label>
      <input className={adminField} value={value} onChange={(e) => onChange(e.target.value)} {...rest} />
    </div>
  );
}

export default function InfoAdmin() {
  const { show, node } = useToast();
  const [cfg, setCfg] = useState<SiteConfig | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getSiteConfig().then(setCfg);
  }, []);

  if (!cfg) return <p className="text-sm text-muted">A carregar informações…</p>;

  const set = (patch: Partial<SiteConfig>) => setCfg({ ...cfg, ...patch });
  const setHour = (i: number, patch: Partial<{ d: string; h: string }>) =>
    set({ hours: cfg.hours.map((h, j) => (j === i ? { ...h, ...patch } : h)) });

  const save = async () => {
    setSaving(true);
    try {
      await saveSiteConfig(cfg);
      show("Informações guardadas.");
    } catch {
      show("Falha ao guardar.", "err");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="pb-24">
      {node}
      <header className="mb-6">
        <p className="eyebrow mb-2">Informações</p>
        <h1 className="font-serif text-4xl font-light text-fg">Informações da casa</h1>
      </header>

      <Card className="mb-5">
        <h2 className="mb-4 font-serif text-lg text-gold">Apresentação</h2>
        <div className="space-y-4">
          <Field label="Tagline" value={cfg.tagline} onChange={(v) => set({ tagline: v })} />
          <div>
            <label className={adminLabel}>Descrição</label>
            <textarea className={`${adminField} min-h-24`} value={cfg.description} onChange={(e) => set({ description: e.target.value })} />
          </div>
        </div>
      </Card>

      <Card className="mb-5">
        <h2 className="mb-4 font-serif text-lg text-gold">Contactos</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Telefone principal" value={cfg.phonePrimary} onChange={(v) => set({ phonePrimary: v })} />
          <Field label="Telefone secundário" value={cfg.phoneSecondary} onChange={(v) => set({ phoneSecondary: v })} />
          <Field label="WhatsApp (só dígitos, com 244)" value={cfg.whatsapp} onChange={(v) => set({ whatsapp: v })} />
          <Field label="Email" value={cfg.email} onChange={(v) => set({ email: v })} />
          <Field label="Instagram (URL)" value={cfg.instagram} onChange={(v) => set({ instagram: v })} />
          <Field label="Instagram (@)" value={cfg.instagramHandle} onChange={(v) => set({ instagramHandle: v })} />
        </div>
      </Card>

      <Card className="mb-5">
        <h2 className="mb-4 font-serif text-lg text-gold">Localização</h2>
        <div className="space-y-4">
          <Field label="Morada" value={cfg.address} onChange={(v) => set({ address: v })} />
          <Field label="Link do Google Maps" value={cfg.mapsUrl} onChange={(v) => set({ mapsUrl: v })} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Latitude" type="number" value={String(cfg.lat)} onChange={(v) => set({ lat: parseFloat(v) || 0 })} />
            <Field label="Longitude" type="number" value={String(cfg.lng)} onChange={(v) => set({ lng: parseFloat(v) || 0 })} />
          </div>
        </div>
      </Card>

      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-lg text-gold">Horário</h2>
          <Btn variant="ghost" onClick={() => set({ hours: [...cfg.hours, { d: "", h: "" }] })}>+ Linha</Btn>
        </div>
        <div className="space-y-3">
          {cfg.hours.map((h, i) => (
            <div key={i} className="flex gap-2">
              <input className={adminField} value={h.d} placeholder="Dias (ex.: Sexta e Sábado)" onChange={(e) => setHour(i, { d: e.target.value })} />
              <input className={adminField} value={h.h} placeholder="Horas (ex.: 10h00 — 02h00)" onChange={(e) => setHour(i, { h: e.target.value })} />
              <button onClick={() => set({ hours: cfg.hours.filter((_, j) => j !== i) })} className="px-3 text-red-400 hover:text-red-300">✕</button>
            </div>
          ))}
        </div>
      </Card>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-end px-5 py-3 md:px-10">
          <Btn onClick={save} disabled={saving}>{saving ? "A guardar…" : "Guardar alterações"}</Btn>
        </div>
      </div>
    </div>
  );
}
