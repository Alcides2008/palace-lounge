// Gera app/data/menu.ts a partir dos JSON em bruto (_data_menu/) extraidos da QRFY.
// Normaliza precos (Kwanza, sem centimos), limpa nomes em CAPS e marca pratos-assinatura.
// Correr: node scripts/build-menu.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DATA = resolve(ROOT, "_data_menu");

const read = (f) => JSON.parse(readFileSync(resolve(DATA, f), "utf8"));
const sectionsOf = (j) => {
  const langs = (j.data && j.data.languages) || {};
  const lang = langs.pt ? "pt" : Object.keys(langs)[0];
  return (langs[lang] && langs[lang].sections) || [];
};

// "25 000,00 KZ" | "9.500,00" | "1 350 000,00 KZ" | "" -> 25000 | 9500 | 1350000 | null
function parsePrice(raw) {
  if (!raw) return null;
  const s = String(raw).replace(/kz/gi, "").trim();
  if (!s) return null;
  const intPart = s.split(",")[0]; // descarta centimos
  const digits = intPart.replace(/\D/g, "");
  if (!digits) return null;
  const n = parseInt(digits, 10);
  return Number.isFinite(n) && n > 0 ? n : null;
}

// Agrupamento manual de milhares com "." (locale pt nao separa numeros de 4 digitos)
const fmt = (n) =>
  n == null ? null : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Kz";

const STOP = new Set(["de","do","da","dos","das","e","com","c/","a","ao","aos","as","em","no","na","ou","of","the","la","le","del","di"]);
const capFirst = (w) => (w ? w.charAt(0).toLocaleUpperCase("pt") + w.slice(1) : w);
// preserva marcas/siglas com digitos ou "&" (JW, CR&F, 1800, 7Up)
const keepToken = (tok) => /\d/.test(tok) || /&/.test(tok);
const stripPunct = (w) => w.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[(),./]/g, "");

// Title case para nomes de pratos/seccoes
const edges = (s) => s.replace(/\s*\/\s*$/, "").replace(/^\s*\/\s*/, "").trim();

function clean(name) {
  let s = String(name || "").replace(/\s+/g, " ").trim();
  s = s.replace(/\bc\s*\/\s*/gi, "com "); // "C/Fruta" -> "com Fruta"
  s = s.replace(/\s*,\s*/g, ", ").replace(/\s*\/\s*/g, " / ");
  const out = s
    .split(" ")
    .map((tok, i) => {
      if (!tok || tok === "/") return tok;
      if (keepToken(tok)) return tok;
      const lower = tok.toLocaleLowerCase("pt");
      if (i > 0 && STOP.has(stripPunct(lower))) return lower;
      return capFirst(lower);
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  return edges(out);
}

// Sentence case para descricoes
function sentence(text) {
  let s = String(text || "").replace(/\s+/g, " ").trim();
  s = s.replace(/\bc\s*\/\s*/gi, "com ");
  s = s.replace(/\s*,\s*/g, ", ").replace(/\s*\/\s*/g, " / ");
  s = s
    .split(" ")
    .map((tok) => (keepToken(tok) ? tok : tok.toLocaleLowerCase("pt")))
    .join(" ")
    .trim();
  return capFirst(edges(s));
}

const SIGNATURE = [
  "bife a palace","picanha","tomahawk","entrecote","tagliatelle de lagosta",
  "arroz de marisco","lagosta grelhada","bacalhau a lagareiro","carre de borrego","risotto de mare",
];
const deburr = (s) => s.toLocaleLowerCase("pt").normalize("NFD").replace(/[̀-ͯ]/g, "");
const isSig = (name) => {
  const n = deburr(name);
  return SIGNATURE.some((s) => n.includes(s));
};

const slug = (s) =>
  deburr(s).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function mapSections(j, { region } = {}) {
  return sectionsOf(j)
    .map((sec) => ({
      id: slug(sec.name),
      title: clean(sec.name),
      items: (sec.items || [])
        .filter((it) => it && it.name && String(it.name).trim())
        .map((it) => {
          const n = parsePrice(it.price);
          const item = { name: clean(it.name) };
          const desc = String(it.description || "").trim();
          if (desc) item.description = sentence(desc);
          if (n != null) {
            item.price = n;
            item.priceLabel = fmt(n);
          }
          if (region) item.region = clean(sec.name);
          if (isSig(item.name)) item.signature = true;
          return item;
        }),
    }))
    .filter((s) => s.items.length);
}

// --- Grupos ---
const groups = [];

groups.push({
  id: "pequeno-almoco",
  label: "Pequeno-Almoço",
  tagline: "Para começar o dia como manda a casa.",
  sections: mapSections(read("m_pequenoalmoco.json")),
});

groups.push({
  id: "principal",
  label: "Menu Principal",
  tagline: "Da entrada à sobremesa — terra, mar e fogo.",
  sections: mapSections(read("m_principal.json")),
});

groups.push({
  id: "bebidas",
  label: "Bar & Bebidas",
  tagline: "Cocktails de autor, gins, whiskies e mais.",
  sections: mapSections(read("m_bebidas.json")),
});

// Vinhos: combina tinto/branco/espumantes; regiao vira sub-etiqueta do item
const wineSec = (j, title) => {
  const regions = mapSections(j, { region: true });
  const items = regions.flatMap((r) => r.items);
  return { id: slug(title), title, items };
};
groups.push({
  id: "vinhos",
  label: "Vinhos & Espumantes",
  tagline: "Garrafeira do Alentejo ao Champanhe.",
  sections: [
    wineSec(read("m_vinho_tinto.json"), "Vinhos Tintos"),
    wineSec(read("m_vinho_branco.json"), "Vinhos Brancos"),
    wineSec(read("m_espumantes.json"), "Espumantes & Champanhe"),
  ],
});

// --- Output ---
const ts = `// AUTO-GERADO por scripts/build-menu.mjs — nao editar a mao.
// Fonte: menu online do Palace Lounge (QRFY). Correr: node scripts/build-menu.mjs

export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  priceLabel?: string;
  region?: string;
  signature?: boolean;
};
export type MenuSection = { id: string; title: string; items: MenuItem[] };
export type MenuGroup = { id: string; label: string; tagline?: string; sections: MenuSection[] };

export const menu: MenuGroup[] = ${JSON.stringify(groups, null, 2)};

export const signatureDishes: MenuItem[] = menu
  .flatMap((g) => g.sections)
  .flatMap((s) => s.items)
  .filter((i) => i.signature);
`;

mkdirSync(resolve(ROOT, "app/data"), { recursive: true });
writeFileSync(resolve(ROOT, "app/data/menu.ts"), ts, "utf8");

const counts = groups.map(
  (g) => `${g.label}: ${g.sections.reduce((a, s) => a + s.items.length, 0)} itens / ${g.sections.length} seccoes`
);
const sig = groups.flatMap((g) => g.sections).flatMap((s) => s.items).filter((i) => i.signature).length;
console.log("OK -> app/data/menu.ts");
console.log(counts.join("\n"));
console.log("Pratos-assinatura:", sig);
