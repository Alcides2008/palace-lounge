import Image from "next/image";
import { Reveal } from "./reveal";

type Tile =
  | { type: "img"; src: string; alt: string }
  | { type: "video"; src: string; poster: string };

const tiles: Tile[] = [
  { type: "video", src: "/media/video/prato-2.mp4", poster: "/media/pratos/dish-1.jpg" },
  { type: "img", src: "/media/pratos/dish-3.jpg", alt: "Prato do Palace Lounge" },
  { type: "img", src: "/media/pratos/dish-6.jpg", alt: "Especialidade da casa" },
  { type: "video", src: "/media/drinks/drink-2.mp4", poster: "/media/pratos/dish-4.jpg" },
  { type: "img", src: "/media/pratos/dish-9.jpg", alt: "Gastronomia de autor" },
  { type: "img", src: "/media/pratos/dish-11.jpg", alt: "Detalhe gastronómico" },
  { type: "img", src: "/media/pratos/dish-7.jpg", alt: "Marisco fresco" },
  { type: "video", src: "/media/drinks/drink-3.mp4", poster: "/media/pratos/dish-12.jpg" },
  { type: "img", src: "/media/pratos/dish-13.jpg", alt: "Cozinha do Palace Lounge" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="u-container">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow mb-4">Galeria</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-light leading-tight">
            Momentos em <span className="italic text-gold-gradient">imagem</span>
          </h2>
        </Reveal>

        <div className="gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {tiles.map((t, i) => (
            <Reveal
              key={i}
              y={24}
              delay={(i % 3) * 0.06}
              className="group mb-4 block break-inside-avoid overflow-hidden rounded-[2px] border border-line-soft"
            >
              {t.type === "img" ? (
                <Image
                  src={t.src}
                  alt={t.alt}
                  width={720}
                  height={1023}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <video
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={t.poster}
                >
                  <source src={t.src} type="video/mp4" />
                </video>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href="https://instagram.com/palace_lounge_ao"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold"
          >
            Mais no Instagram
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
