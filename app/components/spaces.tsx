import { Reveal, RevealGroup, RevealItem } from "./reveal";

const spaces = [
  {
    title: "Salão Principal",
    body: "O coração do Palace. Mesas amplas, serviço atento e a energia certa para um almoço de negócios ou um jantar a dois.",
    icon: (
      <>
        <path d="M4 20h16M6 20v-6a6 6 0 0 1 12 0v6" />
        <path d="M12 8V4M9 4h6" />
      </>
    ),
  },
  {
    title: "Esplanada & Lounge",
    body: "Ao ar livre, sob o céu de Luanda. Sofás, shisha e cocktails para ver o dia tornar-se noite sem pressa nenhuma.",
    icon: (
      <>
        <path d="M3 11h18L12 3 3 11z" />
        <path d="M12 11v10M8 21h8" />
      </>
    ),
  },
  {
    title: "Privativo & Eventos",
    body: "Um espaço reservado para as suas ocasiões — aniversários, celebrações de empresa ou jantares íntimos com toda a privacidade.",
    icon: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="M11 12l9-9 2 2-2 2 1.5 1.5L19 11l-2-2" />
      </>
    ),
  },
];

export function Spaces() {
  return (
    <section id="espacos" className="relative scroll-mt-24 bg-bg-2 py-24 md:py-32">
      <div className="u-container">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow mb-4">Espaços</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-light leading-tight">
            Um lugar para cada{" "}
            <span className="italic text-gold-gradient">ocasião</span>
          </h2>
        </Reveal>

        <RevealGroup className="grid gap-px overflow-hidden rounded-[2px] border border-line-soft bg-line-soft md:grid-cols-3">
          {spaces.map((s) => (
            <RevealItem key={s.title} className="bg-bg-2 p-8 md:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-line text-gold">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </span>
              <h3 className="mt-6 font-serif text-2xl text-fg">{s.title}</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">
                {s.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* Faixa cinematográfica */}
      <div className="relative mt-20 h-[42vh] min-h-[320px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/pratos/dish-10.jpg"
        >
          <source src="/media/video/prato-3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0a0a0a]/55" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <Reveal>
            <p className="font-serif text-[clamp(1.5rem,4vw,2.75rem)] font-light italic leading-snug text-[#f5f2ec]">
              “Cada detalhe pensado para que a única
              <br className="hidden sm:block" /> preocupação seja aproveitar.”
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
