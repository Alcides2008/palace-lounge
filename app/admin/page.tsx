"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Btn, Card, useToast } from "./_ui";
import {
  getMenu,
  getGallery,
  getReservations,
  seedFromDefaults,
} from "../lib/content";

export default function AdminHome() {
  const { show, node } = useToast();
  const [stats, setStats] = useState({ grupos: 0, itens: 0, galeria: 0, reservas: 0 });
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);

  const load = async () => {
    setLoading(true);
    const [menu, gallery, reservas] = await Promise.all([
      getMenu(),
      getGallery(),
      getReservations(),
    ]);
    const itens = menu.reduce((a, g) => a + g.sections.reduce((b, s) => b + s.items.length, 0), 0);
    setStats({ grupos: menu.length, itens, galeria: gallery.length, reservas: reservas.length });
    setLoading(false);
  };

  useEffect(() => {
    Promise.all([getMenu(), getGallery(), getReservations()])
      .then(([menu, gallery, reservas]) => {
        const itens = menu.reduce((a, g) => a + g.sections.reduce((b, s) => b + s.items.length, 0), 0);
        setStats({ grupos: menu.length, itens, galeria: gallery.length, reservas: reservas.length });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const seed = async () => {
    if (!confirm("Importar o cardápio, informações e galeria atuais para a base de dados? Faça isto apenas na primeira configuração.")) return;
    setSeeding(true);
    try {
      await seedFromDefaults();
      show("Dados importados com sucesso.");
      await load();
    } catch {
      show("Falha ao importar dados.", "err");
    } finally {
      setSeeding(false);
    }
  };

  const cards = [
    { href: "/admin/menu", label: "Cardápio", value: `${stats.itens} itens`, sub: `${stats.grupos} grupos` },
    { href: "/admin/galeria", label: "Galeria", value: `${stats.galeria}`, sub: "fotos e vídeos" },
    { href: "/admin/reservas", label: "Reservas", value: `${stats.reservas}`, sub: "pedidos recebidos" },
    { href: "/admin/info", label: "Informações", value: "Editar", sub: "horário, contactos" },
  ];

  return (
    <div>
      {node}
      <header className="mb-8">
        <p className="eyebrow mb-2">Painel</p>
        <h1 className="font-serif text-4xl font-light text-fg">Bem-vindo de volta</h1>
        <p className="mt-2 text-sm text-muted">
          Gerir o conteúdo do site do Palace Lounge.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <Link key={c.href} href={c.href}>
            <Card className="transition-colors hover:border-gold">
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-gold">{c.label}</p>
              <p className="mt-3 font-serif text-3xl text-fg">{loading ? "…" : c.value}</p>
              <p className="mt-1 text-xs text-muted">{c.sub}</p>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="mt-6">
        <h2 className="font-serif text-xl text-fg">Primeira configuração</h2>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Importe o cardápio, as informações e a galeria atuais do site para a base
          de dados. A partir daí, todas as alterações que fizer aqui aparecem no site.
        </p>
        <Btn variant="outline" className="mt-5" onClick={seed} disabled={seeding}>
          {seeding ? "A importar…" : "Importar dados atuais"}
        </Btn>
      </Card>
    </div>
  );
}
