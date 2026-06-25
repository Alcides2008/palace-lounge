"use client";

// Sem estado: o ícone certo é mostrado por CSS conforme [data-theme],
// evitando setState em efeito e qualquer mismatch de hidratação.
export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const cur =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("pl-theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar tema claro/escuro"
      title="Alternar tema"
      className={`group relative grid h-9 w-9 place-items-center rounded-full border border-line text-gold transition-colors hover:bg-surface ${className}`}
    >
      <span className="sr-only">Alternar tema</span>
      {/* Sol — visível no tema escuro */}
      <svg
        viewBox="0 0 24 24"
        className="hidden h-[18px] w-[18px] dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
      </svg>
      {/* Lua — visível no tema claro */}
      <svg
        viewBox="0 0 24 24"
        className="block h-[18px] w-[18px] dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
