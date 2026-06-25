// Camada de conteúdos: lê/escreve no Firestore, com recurso aos dados estáticos
// quando o Firebase não está configurado ou ainda não foi semeado.
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { menu as defaultMenu, type MenuGroup } from "../data/menu";
import { site } from "./site";

export type { MenuGroup, MenuItem, MenuSection } from "../data/menu";

export type Hours = { d: string; h: string };
export type SiteConfig = {
  tagline: string;
  description: string;
  address: string;
  mapsUrl: string;
  lat: number;
  lng: number;
  phonePrimary: string;
  phoneSecondary: string;
  whatsapp: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  hours: Hours[];
};

export type GalleryItem = {
  id?: string;
  order: number;
  type: "img" | "video";
  url: string;
  poster?: string;
  alt?: string;
};

export type Reservation = {
  id?: string;
  nome: string;
  data: string;
  hora: string;
  pessoas: string;
  telefone?: string;
  ocasiao?: string;
  notas?: string;
  status?: "novo" | "confirmado" | "cancelado";
  createdAt?: number;
};

// ---------- Defaults (estáticos) ----------
export const defaultSite: SiteConfig = {
  tagline: site.tagline,
  description: site.description,
  address: site.address,
  mapsUrl: site.mapsUrl,
  lat: site.coords.lat,
  lng: site.coords.lng,
  phonePrimary: site.phonePrimary,
  phoneSecondary: site.phoneSecondary,
  whatsapp: site.whatsapp,
  email: site.email,
  instagram: site.instagram,
  instagramHandle: site.instagramHandle,
  hours: site.hours.map((h) => ({ d: h.d, h: h.h })),
};

export const defaultGallery: GalleryItem[] = [
  { order: 0, type: "video", url: "/media/video/prato-2.mp4", poster: "/media/pratos/dish-1.jpg" },
  { order: 1, type: "img", url: "/media/pratos/dish-3.jpg", alt: "Prato do Palace Lounge" },
  { order: 2, type: "img", url: "/media/pratos/dish-6.jpg", alt: "Especialidade da casa" },
  { order: 3, type: "video", url: "/media/drinks/drink-2.mp4", poster: "/media/pratos/dish-4.jpg" },
  { order: 4, type: "img", url: "/media/pratos/dish-9.jpg", alt: "Gastronomia de autor" },
  { order: 5, type: "img", url: "/media/pratos/dish-11.jpg", alt: "Detalhe gastronómico" },
  { order: 6, type: "img", url: "/media/pratos/dish-7.jpg", alt: "Marisco fresco" },
  { order: 7, type: "video", url: "/media/drinks/drink-3.mp4", poster: "/media/pratos/dish-12.jpg" },
  { order: 8, type: "img", url: "/media/pratos/dish-13.jpg", alt: "Cozinha do Palace Lounge" },
];

// ---------- Site config ----------
export async function getSiteConfig(): Promise<SiteConfig> {
  if (!db) return defaultSite;
  try {
    const snap = await getDoc(doc(db, "config", "site"));
    return snap.exists() ? { ...defaultSite, ...(snap.data() as Partial<SiteConfig>) } : defaultSite;
  } catch {
    return defaultSite;
  }
}

export async function saveSiteConfig(data: SiteConfig): Promise<void> {
  if (!db) throw new Error("Firebase não configurado");
  await setDoc(doc(db, "config", "site"), data, { merge: true });
}

// ---------- Menu ----------
export async function getMenu(): Promise<MenuGroup[]> {
  if (!db) return defaultMenu;
  try {
    const snap = await getDocs(query(collection(db, "menu"), orderBy("order")));
    if (snap.empty) return defaultMenu;
    return snap.docs.map((d) => {
      const data = d.data() as Omit<MenuGroup, "id"> & { order?: number };
      return { id: d.id, label: data.label, tagline: data.tagline, sections: data.sections || [] };
    });
  } catch {
    return defaultMenu;
  }
}

export async function saveMenuGroup(group: MenuGroup, order: number): Promise<void> {
  if (!db) throw new Error("Firebase não configurado");
  await setDoc(doc(db, "menu", group.id), {
    order,
    label: group.label,
    tagline: group.tagline ?? "",
    sections: group.sections,
  });
}

export async function deleteMenuGroup(id: string): Promise<void> {
  if (!db) throw new Error("Firebase não configurado");
  await deleteDoc(doc(db, "menu", id));
}

// ---------- Galeria ----------
export async function getGallery(): Promise<GalleryItem[]> {
  if (!db) return defaultGallery;
  try {
    const snap = await getDocs(query(collection(db, "gallery"), orderBy("order")));
    if (snap.empty) return defaultGallery;
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<GalleryItem, "id">) }));
  } catch {
    return defaultGallery;
  }
}

export async function saveGalleryItem(item: GalleryItem): Promise<void> {
  if (!db) throw new Error("Firebase não configurado");
  const ref = item.id ? doc(db, "gallery", item.id) : doc(collection(db, "gallery"));
  const { id: _omit, ...payload } = item;
  void _omit;
  await setDoc(ref, payload, { merge: true });
}

export async function deleteGalleryItem(id: string): Promise<void> {
  if (!db) throw new Error("Firebase não configurado");
  await deleteDoc(doc(db, "gallery", id));
}

// ---------- Reservas ----------
export async function addReservation(data: Omit<Reservation, "id" | "createdAt" | "status">): Promise<void> {
  if (!db) return; // sem Firebase, segue só por WhatsApp
  try {
    await addDoc(collection(db, "reservations"), {
      ...data,
      status: "novo",
      createdAt: serverTimestamp(),
    });
  } catch {
    // silencioso — o WhatsApp continua a ser o canal principal
  }
}

export async function getReservations(): Promise<Reservation[]> {
  if (!db) return [];
  const snap = await getDocs(query(collection(db, "reservations"), orderBy("createdAt", "desc")));
  return snap.docs.map((d) => {
    const data = d.data() as Record<string, unknown>;
    const ts = data.createdAt as { toMillis?: () => number } | undefined;
    return {
      id: d.id,
      ...(data as Omit<Reservation, "id" | "createdAt">),
      createdAt: ts?.toMillis ? ts.toMillis() : undefined,
    };
  });
}

export async function updateReservationStatus(id: string, status: Reservation["status"]): Promise<void> {
  if (!db) throw new Error("Firebase não configurado");
  await updateDoc(doc(db, "reservations", id), { status });
}

// ---------- Seed inicial ----------
export async function seedFromDefaults(): Promise<void> {
  if (!db) throw new Error("Firebase não configurado");
  await saveSiteConfig(defaultSite);
  for (let i = 0; i < defaultMenu.length; i++) {
    await saveMenuGroup(defaultMenu[i], i);
  }
  for (const g of defaultGallery) {
    await saveGalleryItem(g);
  }
}
