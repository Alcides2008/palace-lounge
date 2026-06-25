"use client";

import { useState, useCallback } from "react";

export const adminField =
  "w-full rounded-[3px] border border-line bg-surface px-3 py-2.5 text-sm text-fg outline-none transition-colors placeholder:text-faint focus:border-gold";
export const adminLabel =
  "mb-1.5 block text-[0.62rem] font-medium uppercase tracking-[0.2em] text-gold";

export function Btn({
  children,
  variant = "solid",
  className = "",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost" | "danger";
}) {
  const styles = {
    solid: "bg-gold text-[#0a0a0a] hover:scale-[1.02]",
    outline: "border border-gold text-gold hover:bg-gold hover:text-[#0a0a0a]",
    ghost: "border border-line text-muted hover:text-fg hover:border-gold",
    danger: "border border-red-500/40 text-red-400 hover:bg-red-500/10",
  }[variant];
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all disabled:cursor-not-allowed disabled:opacity-50 ${styles} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[4px] border border-line-soft bg-bg-2 p-5 md:p-6 ${className}`}>
      {children}
    </div>
  );
}

/** Pequeno gestor de "toast" para feedback de gravação. */
export function useToast() {
  const [msg, setMsg] = useState<{ text: string; kind: "ok" | "err" } | null>(null);
  const show = useCallback((text: string, kind: "ok" | "err" = "ok") => {
    setMsg({ text, kind });
    setTimeout(() => setMsg(null), 3200);
  }, []);
  const node = msg ? (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border px-5 py-2.5 text-sm shadow-xl backdrop-blur ${
        msg.kind === "ok"
          ? "border-gold/40 bg-bg/90 text-gold"
          : "border-red-500/40 bg-bg/90 text-red-400"
      }`}
    >
      {msg.text}
    </div>
  ) : null;
  return { show, node };
}
