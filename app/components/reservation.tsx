"use client";

import { useState } from "react";
import { addReservation } from "../lib/content";
import { useSite, waHref } from "./site-provider";
import { Reveal } from "./reveal";

const field =
  "w-full border-b border-line bg-transparent py-2.5 text-fg outline-none transition-colors placeholder:text-faint focus:border-gold";
const label =
  "mb-1 block text-[0.62rem] font-medium uppercase tracking-[0.22em] text-gold";

export function Reservation() {
  const site = useSite();
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    nome: "",
    data: "",
    hora: "",
    pessoas: "2",
    telefone: "",
    ocasiao: "",
    notas: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Guarda o pedido (se o Firebase estiver configurado) — não bloqueia o WhatsApp.
    void addReservation(form);
    const lines = [
      "Olá Palace Lounge! Gostaria de fazer uma reserva:",
      "",
      `• Nome: ${form.nome}`,
      `• Data: ${form.data}`,
      `• Hora: ${form.hora}`,
      `• Nº de pessoas: ${form.pessoas}`,
      form.telefone ? `• Contacto: ${form.telefone}` : "",
      form.ocasiao ? `• Ocasião: ${form.ocasiao}` : "",
      form.notas ? `• Notas: ${form.notas}` : "",
    ].filter(Boolean);
    window.open(waHref(site.whatsapp, lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="reservas"
      className="relative scroll-mt-24 bg-bg-2 py-24 md:py-32"
    >
      <div className="u-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Convite + contactos directos */}
        <div>
          <Reveal>
            <p className="eyebrow mb-5">Reservas</p>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-[1.05]">
              Reserve a sua{" "}
              <span className="italic text-gold-gradient">mesa</span>
            </h2>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-muted">
              Preencha os detalhes e enviamos o seu pedido directamente para o
              nosso WhatsApp — confirmamos consigo em instantes. Prefere falar?
              Ligue-nos.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 space-y-6">
              <div>
                <p className={label}>Telefone & WhatsApp</p>
                <a href={`tel:+${site.whatsapp}`} className="link-underline font-serif text-2xl text-fg">
                  {site.phonePrimary}
                </a>
                <span className="mx-2 text-faint">·</span>
                <a
                  href={`tel:+244${site.phoneSecondary.replace(/\s/g, "")}`}
                  className="link-underline font-serif text-2xl text-fg"
                >
                  {site.phoneSecondary}
                </a>
              </div>
              <div>
                <p className={label}>Horário</p>
                <ul className="space-y-1 text-sm text-muted">
                  {site.hours.map((h) => (
                    <li key={h.d} className="flex justify-between gap-6">
                      <span>{h.d}</span>
                      <span className="text-fg">{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Formulário */}
        <Reveal delay={0.15}>
          <form
            onSubmit={submit}
            className="rounded-[2px] border border-line bg-bg p-7 md:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={label} htmlFor="r-nome">Nome</label>
                <input id="r-nome" required value={form.nome} onChange={set("nome")} className={field} placeholder="O seu nome" />
              </div>
              <div>
                <label className={label} htmlFor="r-data">Data</label>
                <input id="r-data" required type="date" min={today} value={form.data} onChange={set("data")} className={`${field} [color-scheme:dark]`} />
              </div>
              <div>
                <label className={label} htmlFor="r-hora">Hora</label>
                <input id="r-hora" required type="time" value={form.hora} onChange={set("hora")} className={`${field} [color-scheme:dark]`} />
              </div>
              <div>
                <label className={label} htmlFor="r-pessoas">Nº de pessoas</label>
                <input id="r-pessoas" required type="number" min={1} max={50} value={form.pessoas} onChange={set("pessoas")} className={field} />
              </div>
              <div>
                <label className={label} htmlFor="r-tel">Contacto</label>
                <input id="r-tel" type="tel" value={form.telefone} onChange={set("telefone")} className={field} placeholder="9XX XXX XXX" />
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="r-ocasiao">Ocasião (opcional)</label>
                <select id="r-ocasiao" value={form.ocasiao} onChange={set("ocasiao")} className={`${field} [color-scheme:dark]`}>
                  <option value="">Selecionar…</option>
                  <option>Jantar a dois</option>
                  <option>Almoço de negócios</option>
                  <option>Aniversário</option>
                  <option>Celebração / grupo</option>
                  <option>Outra</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="r-notas">Notas (opcional)</label>
                <textarea id="r-notas" rows={2} value={form.notas} onChange={set("notas")} className={`${field} resize-none`} placeholder="Alergias, preferência de mesa, etc." />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gold py-4 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[#0a0a0a] transition-transform duration-300 hover:scale-[1.01]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.6-6c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5 5 0 0 0 3 .6 2.5 2.5 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" />
              </svg>
              Enviar pedido via WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-faint">
              Abre o WhatsApp com o seu pedido pronto a enviar.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
