// Gera a imagem de partilha (Open Graph) a partir do logótipo.
// Correr: node scripts/make-og.mjs
import sharp from "sharp";

const SRC = "Design sem nome (2).png";
const W = 1200;
const H = 630;

// 1) recorta o branco em redor do logótipo
const trimmed = await sharp(SRC).trim({ threshold: 12 }).toBuffer();

// 2) redimensiona o logótipo para caber com margem
const logo = await sharp(trimmed)
  .resize({ width: 820, height: 460, fit: "inside" })
  .toBuffer();

// 3) compõe centrado numa tela branca 1200x630
await sharp({
  create: { width: W, height: H, channels: 4, background: "#ffffff" },
})
  .composite([{ input: logo, gravity: "center" }])
  .png()
  .toFile("app/opengraph-image.png");

// Twitter/X usa a mesma
await sharp("app/opengraph-image.png").toFile("app/twitter-image.png");

// cópia de pré-visualização (reduzida)
await sharp("app/opengraph-image.png").resize(600).png().toFile("_og-preview.png");

console.log("OK: opengraph-image.png + twitter-image.png (1200x630)");
