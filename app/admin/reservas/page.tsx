"use client";

import { useEffect, useState } from "react";
import { Btn, Card, useToast } from "../_ui";
import {
  getReservations,
  updateReservationStatus,
  type Reservation,
} from "../../lib/content";

const statusStyle: Record<string, string> = {
  novo: "border-gold/50 text-gold",
  confirmado: "border-green-500/50 text-green-400",
  cancelado: "border-red-500/50 text-red-400",
};

function waReply(r: Reservation) {
  const num = (r.telefone || "").replace(/\D/g, "");
  const phone = num.startsWith("244") ? num : num ? `244${num}` : "";
  const msg = `Olá ${r.nome}! Sobre a sua reserva no Palace Lounge para ${r.data} às ${r.hora} (${r.pessoas} pessoas):`;
  return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(msg)}` : null;
}

export default function ReservasAdmin() {
  const { show, node } = useToast();
  const [list, setList] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setList(await getReservations());
    setLoading(false);
  };

  useEffect(() => {
    getReservations()
      .then((d) => {
        setList(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const setStatus = async (r: Reservation, status: Reservation["status"]) => {
    if (!r.id) return;
    try {
      await updateReservationStatus(r.id, status);
      setList((l) => l.map((x) => (x.id === r.id ? { ...x, status } : x)));
      show("Estado atualizado.");
    } catch {
      show("Falha ao atualizar.", "err");
    }
  };

  return (
    <div>
      {node}
      <header className="mb-6 flex items-end justify-between">
        <div>
          <p className="eyebrow mb-2">Reservas</p>
          <h1 className="font-serif text-4xl font-light text-fg">Pedidos de reserva</h1>
        </div>
        <Btn variant="ghost" onClick={load}>Atualizar</Btn>
      </header>

      {loading ? (
        <p className="text-sm text-muted">A carregar…</p>
      ) : list.length === 0 ? (
        <Card>
          <p className="text-sm text-muted">
            Ainda não há reservas guardadas. Os pedidos feitos no formulário do site
            aparecem aqui (além de abrirem o WhatsApp).
          </p>
        </Card>
      ) : (
        <div className="space-y-3">
          {list.map((r) => {
            const wa = waReply(r);
            return (
              <Card key={r.id}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-xl text-fg">{r.nome}</h3>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.16em] ${statusStyle[r.status || "novo"]}`}>
                        {r.status || "novo"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted">
                      <span className="text-fg">{r.data}</span> às <span className="text-fg">{r.hora}</span> · {r.pessoas} pessoas
                      {r.ocasiao ? ` · ${r.ocasiao}` : ""}
                    </p>
                    {r.telefone && <p className="text-sm text-muted">Contacto: <span className="text-fg">{r.telefone}</span></p>}
                    {r.notas && <p className="mt-1 text-sm italic text-muted">“{r.notas}”</p>}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-2">
                      <button onClick={() => setStatus(r, "confirmado")} className="rounded-full border border-green-500/40 px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-green-400 hover:bg-green-500/10">Confirmar</button>
                      <button onClick={() => setStatus(r, "cancelado")} className="rounded-full border border-red-500/40 px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-red-400 hover:bg-red-500/10">Cancelar</button>
                    </div>
                    {wa && (
                      <a href={wa} target="_blank" rel="noopener noreferrer" className="text-[0.7rem] uppercase tracking-[0.14em] text-gold hover:underline">
                        Responder por WhatsApp →
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
