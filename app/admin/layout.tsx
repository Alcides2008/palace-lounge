"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isFirebaseConfigured } from "../lib/firebase";
import { useAuth, login, logout } from "./_auth";
import { adminField, adminLabel, Btn } from "./_ui";
import { Crest } from "../components/logo";

const links = [
  { href: "/admin", label: "Painel" },
  { href: "/admin/menu", label: "Cardápio" },
  { href: "/admin/info", label: "Informações" },
  { href: "/admin/galeria", label: "Galeria" },
  { href: "/admin/reservas", label: "Reservas" },
];

function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-dvh flex-col md:flex-row">
      {/* Barra lateral */}
      <aside className="flex shrink-0 flex-col border-b border-line bg-bg-2 md:w-60 md:border-b-0 md:border-r">
        <div className="flex items-center gap-2.5 px-5 py-5 text-gold">
          <Crest className="h-7 w-9" />
          <div className="leading-none">
            <p className="font-serif text-lg text-fg">Palace Lounge</p>
            <p className="text-[0.55rem] uppercase tracking-[0.3em] text-gold">Administração</p>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:gap-0.5 md:overflow-visible md:px-3">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`whitespace-nowrap rounded-[3px] px-4 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-colors ${
                  active ? "bg-gold text-[#0a0a0a]" : "text-muted hover:bg-surface hover:text-fg"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto hidden border-t border-line-soft p-3 md:block">
          <Btn variant="ghost" className="w-full" onClick={() => logout()}>
            Terminar sessão
          </Btn>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden px-5 py-8 md:px-10 md:py-12">
        <div className="mx-auto max-w-4xl">{children}</div>
      </main>
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await login(email, password);
    } catch (err) {
      const code = (err as { code?: string })?.code || "";
      setError(
        code.includes("invalid-credential") || code.includes("wrong-password") || code.includes("user-not-found")
          ? "Email ou palavra-passe incorretos."
          : "Não foi possível entrar. Tente novamente."
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid min-h-dvh place-items-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center text-center text-gold">
          <Crest className="h-12 w-16" />
          <h1 className="mt-4 font-serif text-3xl text-fg">Palace Lounge</h1>
          <p className="eyebrow mt-1">Administração</p>
        </div>
        <form onSubmit={submit} className="rounded-[4px] border border-line bg-bg-2 p-7">
          <label className={adminLabel} htmlFor="a-email">Email</label>
          <input id="a-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={adminField} placeholder="admin@palacelounge.ao" />
          <label className={`${adminLabel} mt-5`} htmlFor="a-pass">Palavra-passe</label>
          <input id="a-pass" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={adminField} placeholder="••••••••" />
          {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
          <Btn type="submit" className="mt-6 w-full" disabled={busy}>
            {busy ? "A entrar…" : "Entrar"}
          </Btn>
        </form>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (!isFirebaseConfigured) {
    return (
      <div className="grid min-h-dvh place-items-center px-6 text-center">
        <div className="max-w-md">
          <h1 className="font-serif text-2xl text-fg">Painel por configurar</h1>
          <p className="mt-3 text-sm text-muted">
            Adicione as chaves do Firebase em <code className="text-gold">.env.local</code> e
            reinicie o servidor para ativar a administração.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid min-h-dvh place-items-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-gold" />
      </div>
    );
  }

  if (!user) return <LoginForm />;
  return <Shell>{children}</Shell>;
}
