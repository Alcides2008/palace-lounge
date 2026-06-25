"use client";

import { useSite, waHref } from "./site-provider";
import { Reveal } from "./reveal";

export function Location() {
  const site = useSite();
  const mapEmbed = `https://maps.google.com/maps?q=${site.lat},${site.lng}&z=16&output=embed`;

  return (
    <section id="localizacao" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="u-container">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow mb-4">Localização</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-light leading-tight">
            Onde nos <span className="italic text-gold-gradient">encontrar</span>
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <Reveal className="flex flex-col justify-center">
            <dl className="space-y-8">
              <div>
                <dt className="eyebrow mb-2">Morada</dt>
                <dd className="font-serif text-xl leading-snug text-fg">
                  {site.address}
                </dd>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-3 inline-flex items-center gap-2 text-sm text-gold"
                >
                  Ver direcções
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div>
                <dt className="eyebrow mb-2">Horário</dt>
                <dd>
                  <ul className="space-y-1 text-sm text-muted">
                    {site.hours.map((h) => (
                      <li key={h.d} className="flex justify-between gap-6 border-b border-line-soft py-1.5">
                        <span>{h.d}</span>
                        <span className="text-fg">{h.h}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>

              <div>
                <dt className="eyebrow mb-2">Contacto</dt>
                <dd className="space-y-1.5 text-sm text-muted">
                  <p>
                    <a href={`tel:+${site.whatsapp}`} className="transition-colors hover:text-fg">{site.phonePrimary}</a>
                    {" · "}
                    <a href={waHref(site.whatsapp, "Olá! Gostaria de uma informação.")} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">WhatsApp</a>
                  </p>
                  <p><a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">{site.email}</a></p>
                  <p><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">{site.instagramHandle}</a></p>
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* Mapa */}
          <Reveal delay={0.1} className="overflow-hidden rounded-[2px] border border-line">
            <iframe
              title="Mapa — Palace Lounge"
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[340px] w-full grayscale-[0.2]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
