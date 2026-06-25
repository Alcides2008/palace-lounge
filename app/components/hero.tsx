"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Fundo cinematográfico */}
      <div className="absolute inset-0 -z-10">
        <video
          className="kenburns h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/pratos/dish-2.jpg"
        >
          <source src="/media/video/hero.mp4" type="video/mp4" />
        </video>
        {/* escurecimento + vinheta */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/45 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.7)_100%)]" />
      </div>

      {/* Conteúdo */}
      <div className="u-container flex flex-col items-center text-center text-[#f5f2ec]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="eyebrow mb-7"
        >
          Restaurante · Lounge · Eventos
        </motion.p>

        <h1 className="font-serif font-light leading-[0.92]">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
            className="block text-[clamp(3.2rem,12vw,9.5rem)] tracking-[0.02em]"
          >
            Palace
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="-mt-2 block text-[clamp(3.2rem,12vw,9.5rem)] italic"
          >
            <span className="text-gold-gradient">Lounge</span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, ease, delay: 0.7 }}
          className="rule-gold my-7 w-full max-w-sm"
        >
          <svg viewBox="0 0 10 10" className="h-2 w-2 rotate-45">
            <rect width="10" height="10" fill="currentColor" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.85 }}
          className="max-w-xl text-balance text-base font-light leading-relaxed text-[#f5f2ec]/85 sm:text-lg"
        >
          À sombra do Palácio de Ferro, em Luanda. Onde cada sabor encanta e
          cada noite se torna memória.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#reservas"
            className="group rounded-full bg-gold px-9 py-3.5 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[#0a0a0a] transition-transform duration-300 hover:scale-[1.03]"
          >
            Reservar Mesa
          </a>
          <a
            href="#menu"
            className="link-underline text-[0.74rem] font-medium uppercase tracking-[0.24em] text-[#f5f2ec]/90"
          >
            Ver Cardápio
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#experiencia"
        aria-label="Descer"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[#f5f2ec]/70"
      >
        <span className="scrollcue flex flex-col items-center gap-2">
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Descubra</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.2}>
            <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </section>
  );
}
