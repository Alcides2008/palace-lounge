import Image from "next/image";
import { Reveal } from "./reveal";

const pillars = [
  {
    title: "Cozinha de Autor",
    body: "Da picanha ao sushi, do marisco fresco às massas italianas — sabores que viajam o mundo e regressam a Luanda.",
  },
  {
    title: "Esplanada & Lounge",
    body: "Um terraço ao ar livre, mesas que respiram e o conforto de um lounge para ficar até a noite cair.",
  },
  {
    title: "Eventos & Celebrações",
    body: "Almoços de negócios, jantares íntimos ou grandes ocasiões — recebemos cada momento com a mesma elegância.",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="u-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Imagens — composição assimétrica */}
        <Reveal y={36} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] border border-line">
            <Image
              src="/media/pratos/dish-5.jpg"
              alt="Prato de assinatura do Palace Lounge"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent" />
          </div>

          {/* imagem secundária sobreposta */}
          <div className="absolute -bottom-8 -right-4 hidden aspect-square w-40 overflow-hidden rounded-[2px] border border-gold shadow-2xl sm:block md:w-52">
            <Image
              src="/media/pratos/dish-8.jpg"
              alt="Detalhe gastronómico"
              fill
              sizes="13rem"
              className="object-cover"
            />
          </div>

          {/* selo de localização */}
          <div className="absolute -left-3 top-6 rotate-[-90deg] origin-left">
            <span className="eyebrow whitespace-nowrap text-[0.6rem]">
              Largo da Maianga · Luanda
            </span>
          </div>
        </Reveal>

        {/* Texto */}
        <div>
          <Reveal>
            <p className="eyebrow mb-5">A Experiência</p>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-[1.05]">
              À sombra do{" "}
              <span className="italic text-gold-gradient">Palácio de Ferro</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-7 space-y-5 text-[0.98rem] leading-relaxed text-muted">
              <p>
                Há lugares que se visitam. E há lugares que se sentem. O Palace
                Lounge nasce frente a um dos monumentos mais icónicos de Luanda,
                onde a história da cidade encontra uma mesa posta com intenção.
              </p>
              <p>
                Aqui, o tempo abranda. Entre a luz dourada do fim de tarde e o
                murmúrio da esplanada, servimos almoços, jantares e celebrações
                que ninguém tem pressa de terminar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid gap-px overflow-hidden rounded-[2px] border border-line-soft bg-line-soft sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="bg-bg p-5">
                  <h3 className="font-serif text-lg text-gold">{p.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
