"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { useSite, waHref } from "./site-provider";

const kinds = [
  "Aniversários & celebrações",
  "Jantares de empresa",
  "Transmissão de grandes jogos",
  "Reservas de grupo",
];

export function Events() {
  const site = useSite();
  return (
    <section id="eventos" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="u-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal y={36} className="order-2 lg:order-1">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2px] border border-line">
            <Image
              src="/media/pratos/dish-4.jpg"
              alt="Mesa preparada para um evento no Palace Lounge"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow mb-5">Eventos & Celebrações</p>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-[1.05]">
              A sua próxima grande{" "}
              <span className="italic text-gold-gradient">ocasião</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-muted">
              Do brinde íntimo à festa que toda a cidade comenta, tratamos de
              tudo — menu, ambiente e atenção ao detalhe. Diga-nos o que imagina
              e desenhamos a noite consigo.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {kinds.map((k) => (
                <li key={k} className="flex items-center gap-3 text-sm text-fg">
                  <span className="text-gold">✦</span>
                  {k}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={waHref(
                site.whatsapp,
                "Olá! Gostaria de organizar um evento no Palace Lounge. Podem dar-me mais informações?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-gold px-7 py-3.5 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-[#0a0a0a]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.6-6c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5 5 0 0 0 3 .6 2.5 2.5 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" />
              </svg>
              Falar sobre o meu evento
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
