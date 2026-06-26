"use client";

import { useEffect, useState } from "react";
import { nav } from "../lib/site";
import { Wordmark } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  // Sobre o hero (transparente) o nav fica sempre claro, independente do tema.
  const overHero = !solid
    ? ({
        ["--fg" as string]: "#f5f2ec",
        ["--muted" as string]: "rgba(245,242,236,0.78)",
        ["--line" as string]: "rgba(245,242,236,0.20)",
      } as React.CSSProperties)
    : undefined;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        style={overHero}
        className="u-container flex h-[4.75rem] items-center justify-between"
      >
        <a href="#top" aria-label="Palace Lounge — início" className="shrink-0">
          <Wordmark />
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-underline text-[0.82rem] font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#reservas"
            className="hidden rounded-full border border-gold px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-[#0a0a0a] sm:inline-block"
          >
            Reservar
          </a>

          {/* Hambúrguer — mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center text-fg lg:hidden"
          >
            <span className="relative flex h-4 w-6 flex-col justify-between">
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>
    </header>

      {/* Overlay — mobile. Fora do <header> para o fixed cobrir o ecrã (o backdrop-filter do header criava um containing block). */}
      <div
        className={`fixed inset-0 top-[4.75rem] z-40 overflow-y-auto lg:hidden ${
          open ? "block" : "hidden"
        }`}
        style={{ backgroundColor: "var(--bg)" }}
      >
        <ul className="u-container flex flex-col gap-1 pt-8">
          {nav.map((item, i) => (
            <li
              key={item.href}
              className="border-b border-line-soft"
              style={{
                transform: open ? "translateY(0)" : "translateY(12px)",
                opacity: open ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.05}s`,
              }}
            >
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-serif text-2xl text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-8">
            <a
              href="#reservas"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gold py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#0a0a0a]"
            >
              Reservar Mesa
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
