"use client";

import { useEffect, useState } from "react";
import { adminField, adminLabel, Btn, Card, useToast } from "../_ui";
import {
  getMenu,
  saveMenuGroup,
  deleteMenuGroup,
  type MenuGroup,
  type MenuSection,
  type MenuItem,
} from "../../lib/content";

const slug = (s: string) =>
  s.toLocaleLowerCase("pt").normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `g-${Date.now()}`;

const swap = <T,>(arr: T[], i: number, j: number) => {
  if (j < 0 || j >= arr.length) return arr;
  const next = [...arr];
  [next[i], next[j]] = [next[j], next[i]];
  return next;
};

export default function MenuAdmin() {
  const { show, node } = useToast();
  const [groups, setGroups] = useState<MenuGroup[]>([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getMenu().then((g) => {
      setGroups(g);
      setLoading(false);
    });
  }, []);

  const group = groups[active];

  const patchGroup = (patch: Partial<MenuGroup>) =>
    setGroups((gs) => gs.map((g, i) => (i === active ? { ...g, ...patch } : g)));

  const setSections = (fn: (s: MenuSection[]) => MenuSection[]) =>
    patchGroup({ sections: fn(group.sections) });

  const updateSection = (si: number, patch: Partial<MenuSection>) =>
    setSections((secs) => secs.map((s, i) => (i === si ? { ...s, ...patch } : s)));

  const updateItem = (si: number, ii: number, patch: Partial<MenuItem>) =>
    setSections((secs) =>
      secs.map((s, i) =>
        i === si ? { ...s, items: s.items.map((it, j) => (j === ii ? { ...it, ...patch } : it)) } : s
      )
    );

  const save = async () => {
    if (!group) return;
    setSaving(true);
    try {
      await saveMenuGroup(group, active);
      show("Cardápio guardado.");
    } catch {
      show("Falha ao guardar.", "err");
    } finally {
      setSaving(false);
    }
  };

  const addGroup = async () => {
    const label = prompt("Nome do novo grupo (ex.: Sobremesas)");
    if (!label) return;
    const g: MenuGroup = { id: slug(label), label, tagline: "", sections: [] };
    setGroups((gs) => [...gs, g]);
    setActive(groups.length);
    try {
      await saveMenuGroup(g, groups.length);
      show("Grupo criado.");
    } catch {
      show("Falha ao criar grupo.", "err");
    }
  };

  const removeGroup = async () => {
    if (!group || !confirm(`Eliminar o grupo "${group.label}" e todos os seus itens?`)) return;
    try {
      await deleteMenuGroup(group.id);
      setGroups((gs) => gs.filter((_, i) => i !== active));
      setActive(0);
      show("Grupo eliminado.");
    } catch {
      show("Falha ao eliminar.", "err");
    }
  };

  if (loading) return <p className="text-sm text-muted">A carregar cardápio…</p>;

  return (
    <div className="pb-24">
      {node}
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Cardápio</p>
          <h1 className="font-serif text-4xl font-light text-fg">Editar cardápio</h1>
        </div>
        <Btn variant="ghost" onClick={addGroup}>+ Novo grupo</Btn>
      </header>

      {/* Separadores de grupo */}
      <div className="mb-6 flex flex-wrap gap-2">
        {groups.map((g, i) => (
          <button
            key={g.id}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors ${
              i === active ? "bg-gold text-[#0a0a0a]" : "border border-line text-muted hover:text-fg"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {group && (
        <>
          {/* Meta do grupo */}
          <Card className="mb-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={adminLabel}>Nome do grupo</label>
                <input className={adminField} value={group.label} onChange={(e) => patchGroup({ label: e.target.value })} />
              </div>
              <div>
                <label className={adminLabel}>Subtítulo (tagline)</label>
                <input className={adminField} value={group.tagline ?? ""} onChange={(e) => patchGroup({ tagline: e.target.value })} />
              </div>
            </div>
          </Card>

          {/* Secções */}
          {group.sections.map((sec, si) => (
            <Card key={si} className="mb-4">
              <div className="mb-4 flex items-center gap-2">
                <input
                  className={`${adminField} font-serif text-lg`}
                  value={sec.title}
                  onChange={(e) => updateSection(si, { title: e.target.value })}
                  placeholder="Nome da secção"
                />
                <button title="Subir" onClick={() => setSections((s) => swap(s, si, si - 1))} className="px-2 text-muted hover:text-gold">▲</button>
                <button title="Descer" onClick={() => setSections((s) => swap(s, si, si + 1))} className="px-2 text-muted hover:text-gold">▼</button>
                <button title="Eliminar secção" onClick={() => confirm("Eliminar esta secção?") && setSections((s) => s.filter((_, i) => i !== si))} className="px-2 text-red-400 hover:text-red-300">✕</button>
              </div>

              <div className="space-y-3">
                {sec.items.map((it, ii) => (
                  <div key={ii} className="rounded-[3px] border border-line-soft p-3">
                    <div className="flex flex-wrap gap-2">
                      <input className={`${adminField} flex-1 min-w-[12rem]`} value={it.name} placeholder="Nome do item" onChange={(e) => updateItem(si, ii, { name: e.target.value })} />
                      <input className={`${adminField} w-32`} value={it.priceLabel ?? ""} placeholder="Preço (ex.: 30.000 Kz)" onChange={(e) => updateItem(si, ii, { priceLabel: e.target.value })} />
                    </div>
                    <input className={`${adminField} mt-2`} value={it.description ?? ""} placeholder="Descrição (opcional)" onChange={(e) => updateItem(si, ii, { description: e.target.value })} />
                    <div className="mt-2 flex flex-wrap items-center gap-4">
                      <input className={`${adminField} w-44`} value={it.region ?? ""} placeholder="Região (vinhos)" onChange={(e) => updateItem(si, ii, { region: e.target.value })} />
                      <label className="flex items-center gap-2 text-xs text-muted">
                        <input type="checkbox" checked={!!it.signature} onChange={(e) => updateItem(si, ii, { signature: e.target.checked })} className="accent-[var(--gold)]" />
                        Prato de assinatura ✦
                      </label>
                      <div className="ml-auto flex gap-1">
                        <button title="Subir" onClick={() => updateSection(si, { items: swap(sec.items, ii, ii - 1) })} className="px-2 text-muted hover:text-gold">▲</button>
                        <button title="Descer" onClick={() => updateSection(si, { items: swap(sec.items, ii, ii + 1) })} className="px-2 text-muted hover:text-gold">▼</button>
                        <button title="Eliminar item" onClick={() => updateSection(si, { items: sec.items.filter((_, j) => j !== ii) })} className="px-2 text-red-400 hover:text-red-300">✕</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Btn variant="ghost" className="mt-4" onClick={() => updateSection(si, { items: [...sec.items, { name: "" }] })}>
                + Adicionar item
              </Btn>
            </Card>
          ))}

          <div className="flex flex-wrap gap-3">
            <Btn variant="ghost" onClick={() => setSections((s) => [...s, { id: `sec-${Date.now()}`, title: "Nova secção", items: [] }])}>
              + Adicionar secção
            </Btn>
            <Btn variant="danger" onClick={removeGroup}>Eliminar grupo</Btn>
          </div>

          {/* Barra de gravação fixa */}
          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3 md:px-10">
              <p className="text-xs text-muted">Grupo: <span className="text-fg">{group.label}</span></p>
              <Btn onClick={save} disabled={saving}>{saving ? "A guardar…" : "Guardar alterações"}</Btn>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
