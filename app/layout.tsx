import type { Metadata, Viewport } from "next";
// Fontes auto-alojadas (Fontsource) — sem dependência de rede no build.
import "@fontsource-variable/inter/wght.css";
import "@fontsource/cormorant-garamond/latin-300.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/cormorant-garamond/latin-700.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
import "@fontsource/cormorant-garamond/latin-600-italic.css";
import "./globals.css";
import { site } from "./lib/site";

// Domínio base para URLs absolutos (og:image, etc.).
// Na Vercel usa o domínio de produção automaticamente; senão, o domínio final.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://palacelounge.ao");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Restaurante & Lounge | Luanda`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Palace Lounge",
    "restaurante Luanda",
    "lounge Luanda",
    "Palácio de Ferro",
    "jantar Luanda",
    "eventos Luanda",
    "marisco",
    "sushi",
    "vinhos",
  ],
  openGraph: {
    title: `${site.name} — Restaurante & Lounge`,
    description: site.description,
    locale: "pt_AO",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark light",
};

const themeScript = `(function(){try{var t=localStorage.getItem('pl-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
