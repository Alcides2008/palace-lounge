"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { menu as defaultMenu } from "../data/menu";
import { getMenu, type MenuGroup, type MenuItem } from "../lib/content";
import { Reveal } from "./reveal";

function Price({ item }: { item: MenuItem }) {
  if (!item.priceLabel) {
    return (
      <span className="shrink-0 text-[0.72rem] italic tracking-wide text-faint">
        sob consulta
      </span>
    );
  }
  return (
    <span className="shrink-0 font-sans text-sm tabular-nums text-gold">
      {item.priceLabel}
    </span>
  );
}

function Item({ item }: { item: MenuItem }) {
  return (
    <li className="group py-3">
      <div className="flex items-baseline gap-2">
        <span className="flex items-baseline gap-2 font-serif text-[1.15rem] leading-snug text-fg">
          {item.name}
          {item.signature && (
            <span
              title="Prato de assinatura"
              className="translate-y-[-1px] text-[0.7rem] text-gold"
            >
              ✦
            </span>
          )}
        </span>
        {item.region && (
          <span className="hidden shrink-0 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-faint sm:inline">
            {item.region}
          </span>
        )}
        <span className="mb-1 h-px flex-1 border-b border-dotted border-line opacity-70" />
        <Price item={item} />
      </div>
      {item.description && (
        <p className="mt-1 max-w-prose text-[0.82rem] leading-relaxed text-muted">
          {item.description}
        </p>
      )}
    </li>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(0);
  const [groups, setGroups] = useState<MenuGroup[]>(defaultMenu);

  useEffect(() => {
    getMenu()
      .then((g) => {
        if (g.length) setGroups(g);
      })
      .catch(() => {});
  }, []);

  const signatureDishes = useMemo(
    () =>
      groups
        .flatMap((g) => g.sections)
        .flatMap((s) => s.items)
        .filter((i) => i.signature),
    [groups]
  );

  const group = groups[Math.min(active, groups.length - 1)];

  return (
    <section
      id="menu"
      className="relative scroll-mt-24 border-t border-line-soft bg-bg-2 py-24 md:py-32"
    >
      <div className="u-container">
        {/* Cabeçalho */}
        <Reveal className="text-center">
          <p className="eyebrow mb-4">O Cardápio</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-light leading-tight">
            Uma carta para se{" "}
            <span className="italic text-gold-gradient">perder</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted">
            Da brasa ao sushi, do marisco aos vinhos do mundo. Preços em
            kwanzas. Carta sujeita a disponibilidade sazonal.
          </p>
        </Reveal>

        {/* Pratos de assinatura */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <div className="rule-gold mb-6 text-[0.62rem]">
            <span className="eyebrow">Assinatura da Casa</span>
          </div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-3">
            {signatureDishes.map((d) => (
              <li
                key={d.name}
                className="flex items-baseline justify-between gap-2 border-b border-line-soft pb-2"
              >
                <span className="font-serif text-[0.98rem] text-fg">
                  {d.name}
                </span>
                <span className="shrink-0 text-xs tabular-nums text-gold">
                  {d.priceLabel}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Separadores de grupo */}
        <div className="mt-16 flex justify-center">
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-line-soft p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {groups.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActive(i)}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors sm:px-6 ${
                  i === active ? "text-[#0a0a0a]" : "text-muted hover:text-fg"
                }`}
              >
                {i === active && (
                  <motion.span
                    layoutId="menu-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo do grupo activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {group.tagline && (
              <p className="mx-auto mt-10 max-w-md text-center font-serif text-lg italic text-muted">
                {group.tagline}
              </p>
            )}

            <div className="mt-10 gap-x-16 lg:columns-2">
              {group.sections.map((sec) => (
                <div
                  key={sec.id}
                  className="mb-10 break-inside-avoid"
                >
                  <h3 className="flex items-center gap-3 font-serif text-xl text-gold">
                    <span>{sec.title}</span>
                    <span className="h-px flex-1 bg-line" />
                  </h3>
                  <ul className="mt-2 divide-y divide-line-soft/60">
                    {sec.items.map((it, idx) => (
                      <Item key={`${sec.id}-${idx}`} item={it} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nota de rodapé do menu */}
        <p className="mt-12 text-center text-xs text-faint">
          ✦ Prato de assinatura · Os preços podem sofrer alterações sem aviso
          prévio.
        </p>
      </div>
    </section>
  );
}
