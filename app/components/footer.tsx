"use client";

import { nav } from "../lib/site";
import { useSite, waHref } from "./site-provider";
import { Crest } from "./logo";

export function Footer() {
  const site = useSite();
  return (
    <footer className="relative border-t border-line bg-bg-2">
      <div className="u-container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3 text-gold">
            <Crest className="h-9 w-12" />
            <span className="font-serif text-2xl text-fg">
              Palace <span className="italic">Lounge</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline}. Almoços, jantares e eventos à sombra do Palácio de
            Ferro, em Luanda.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-6 inline-flex items-center gap-2 text-sm text-gold"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
            {site.instagramHandle}
          </a>
        </div>

        {/* Navegação */}
        <nav>
          <h3 className="eyebrow mb-5">Navegar</h3>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contactos */}
        <div>
          <h3 className="eyebrow mb-5">Reservas & Contacto</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <a href={`tel:+${site.whatsapp}`} className="transition-colors hover:text-fg">
                {site.phonePrimary}
              </a>
              {" · "}
              <a href={`tel:+244${site.phoneSecondary.replace(/\s/g, "")}`} className="transition-colors hover:text-fg">
                {site.phoneSecondary}
              </a>
            </li>
            <li>
              <a
                href={waHref(site.whatsapp, "Olá! Gostaria de fazer uma reserva no Palace Lounge.")}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fg"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">
                {site.email}
              </a>
            </li>
            <li className="pt-2 leading-relaxed">{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line-soft">
        <div className="u-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Palace Lounge · Luanda. Todos os direitos reservados.</p>
          <p>Feito com cuidado em Angola.</p>
        </div>
      </div>
    </footer>
  );
}
