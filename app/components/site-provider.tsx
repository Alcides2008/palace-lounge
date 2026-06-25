"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { defaultSite, getSiteConfig, type SiteConfig } from "../lib/content";

const SiteCtx = createContext<SiteConfig>(defaultSite);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [cfg, setCfg] = useState<SiteConfig>(defaultSite);

  useEffect(() => {
    getSiteConfig()
      .then(setCfg)
      .catch(() => {});
  }, []);

  return <SiteCtx.Provider value={cfg}>{children}</SiteCtx.Provider>;
}

export const useSite = () => useContext(SiteCtx);

export const waHref = (whatsapp: string, msg?: string) =>
  `https://wa.me/${whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
