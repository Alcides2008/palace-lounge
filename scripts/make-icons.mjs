// Gera app/favicon.ico (PNG embutido) e app/apple-icon.png a partir de app/icon.svg.
// Correr: node scripts/make-icons.mjs
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const svg = "app/icon.svg";
const sizes = [16, 32, 48, 64];

const pngs = await Promise.all(
  sizes.map((s) => sharp(svg).resize(s, s).png().toBuffer())
);

const count = pngs.length;
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type = icon
header.writeUInt16LE(count, 4);

const entries = Buffer.alloc(16 * count);
let offset = 6 + 16 * count;
pngs.forEach((png, i) => {
  const s = sizes[i];
  const e = entries.subarray(i * 16, i * 16 + 16);
  e.writeUInt8(s >= 256 ? 0 : s, 0); // width
  e.writeUInt8(s >= 256 ? 0 : s, 1); // height
  e.writeUInt8(0, 2); // colors
  e.writeUInt8(0, 3); // reserved
  e.writeUInt16LE(1, 4); // planes
  e.writeUInt16LE(32, 6); // bit count
  e.writeUInt32LE(png.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += png.length;
});

writeFileSync("app/favicon.ico", Buffer.concat([header, entries, ...pngs]));

// Apple touch icon
await sharp(svg).resize(180, 180).png().toFile("app/apple-icon.png");

console.log("OK: favicon.ico (" + sizes.join(",") + ") + apple-icon.png");
