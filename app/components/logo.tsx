/** Marca do Palace Lounge — fachada estilizada do Palácio de Ferro (line-art). */
export function Crest({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* base */}
      <path d="M4 43h56" />
      <path d="M8 43V25M56 43V25" />
      {/* alas laterais — colunas */}
      <path d="M13 43V27M18 43V27M23 43V27" opacity={0.85} />
      <path d="M41 43V27M46 43V27M51 43V27" opacity={0.85} />
      {/* corpo central elevado */}
      <path d="M25 43V18h14v25" />
      <path d="M28 43V24h8v19" opacity={0.85} />
      {/* frontão / cúpula central */}
      <path d="M23 18l9-9 9 9" />
      {/* torre + finial */}
      <path d="M32 9V3" />
      <circle cx="32" cy="2" r="1.4" />
      {/* escadaria */}
      <path d="M27 43l-2 3h14l-2-3" opacity={0.6} />
    </svg>
  );
}

export function Wordmark({
  className = "",
  withCrest = true,
}: {
  className?: string;
  withCrest?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-gold ${className}`}>
      {withCrest && <Crest className="h-7 w-9 shrink-0" />}
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.35rem] tracking-wide text-fg">
          Palace <span className="italic">Lounge</span>
        </span>
        <span className="mt-0.5 text-[0.55rem] font-medium uppercase tracking-[0.42em] text-gold">
          Luanda
        </span>
      </span>
    </span>
  );
}
