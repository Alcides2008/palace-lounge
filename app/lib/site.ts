// Dados centrais do Palace Lounge. Confirmar horário com o cliente.
export const site = {
  name: "Palace Lounge",
  tagline: "Sabores que encantam, ambiente que acolhe",
  city: "Luanda, Angola",
  description:
    "Restaurante & lounge à sombra do Palácio de Ferro, em Luanda. Almoços, jantares e eventos — cozinha de autor, garrafeira e cocktails, numa esplanada onde cada detalhe acolhe.",
  address: "Palácio de Ferro — frente à Endiama, Largo da Maianga, Luanda",
  coords: { lat: -8.8137264, lng: 13.2352085 },
  mapsUrl: "https://maps.google.com/maps?q=-8.8137264,13.2352085&z=17",
  // Reservas / contactos
  phonePrimary: "941 805 698",
  phoneSecondary: "941 806 321",
  whatsapp: "244941805698", // +244 9418 05698
  email: "geral@palacelounge.ao",
  instagram: "https://instagram.com/palace_lounge_ao",
  instagramHandle: "@palace_lounge_ao",
  // Horário — CONFIRMAR com o cliente (placeholder razoável)
  hours: [
    { d: "Segunda a Quinta", h: "10h00 — 23h00" },
    { d: "Sexta e Sábado", h: "10h00 — 02h00" },
    { d: "Domingo", h: "10h00 — 23h00" },
  ],
} as const;

export const nav = [
  { href: "#experiencia", label: "A Experiência" },
  { href: "#menu", label: "Cardápio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#espacos", label: "Espaços" },
  { href: "#eventos", label: "Eventos" },
  { href: "#reservas", label: "Reservas" },
  { href: "#localizacao", label: "Contactos" },
] as const;

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
