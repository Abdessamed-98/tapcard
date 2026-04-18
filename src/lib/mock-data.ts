// ─── PRODUCTS ────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  description: string;
  type: "NFC_CARD" | "NFC_BOARD" | "NFC_KEYCHAIN" | "BUNDLE";
  priceDA: number;
  imageUrl: string;
  popular?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Carte NFC",
    description:
      "Carte de visite intelligente au format portefeuille. Partagez vos coordonnées en un seul tap.",
    type: "NFC_CARD",
    priceDA: 1500,
    imageUrl: "/images/nfc-card.png",
    popular: true,
  },
  {
    id: "prod-2",
    name: "Plaque NFC",
    description:
      "Plaque NFC pour bureau ou vitrine. Idéale pour les commerces et les professionnels.",
    type: "NFC_BOARD",
    priceDA: 3500,
    imageUrl: "/images/nfc-board.png",
  },
  {
    id: "prod-3",
    name: "Porte-clés NFC",
    description:
      "Porte-clés NFC pratique. Gardez votre profil toujours avec vous.",
    type: "NFC_KEYCHAIN",
    priceDA: 1200,
    imageUrl: "/images/nfc-keychain.png",
  },
];

// ─── ALGERIAN WILAYAS ─────────────────────────────────────────────────────────

export interface Wilaya {
  code: string;
  name: string;
}

export const WILAYAS: Wilaya[] = [
  { code: "01", name: "Adrar" },
  { code: "02", name: "Chlef" },
  { code: "03", name: "Laghouat" },
  { code: "04", name: "Oum El Bouaghi" },
  { code: "05", name: "Batna" },
  { code: "06", name: "Béjaïa" },
  { code: "07", name: "Biskra" },
  { code: "08", name: "Béchar" },
  { code: "09", name: "Blida" },
  { code: "10", name: "Bouira" },
  { code: "11", name: "Tamanrasset" },
  { code: "12", name: "Tébessa" },
  { code: "13", name: "Tlemcen" },
  { code: "14", name: "Tiaret" },
  { code: "15", name: "Tizi Ouzou" },
  { code: "16", name: "Alger" },
  { code: "17", name: "Djelfa" },
  { code: "18", name: "Jijel" },
  { code: "19", name: "Sétif" },
  { code: "20", name: "Saïda" },
  { code: "21", name: "Skikda" },
  { code: "22", name: "Sidi Bel Abbès" },
  { code: "23", name: "Annaba" },
  { code: "24", name: "Guelma" },
  { code: "25", name: "Constantine" },
  { code: "26", name: "Médéa" },
  { code: "27", name: "Mostaganem" },
  { code: "28", name: "M'Sila" },
  { code: "29", name: "Mascara" },
  { code: "30", name: "Ouargla" },
  { code: "31", name: "Oran" },
  { code: "32", name: "El Bayadh" },
  { code: "33", name: "Illizi" },
  { code: "34", name: "Bordj Bou Arréridj" },
  { code: "35", name: "Boumerdès" },
  { code: "36", name: "El Tarf" },
  { code: "37", name: "Tindouf" },
  { code: "38", name: "Tissemsilt" },
  { code: "39", name: "El Oued" },
  { code: "40", name: "Khenchela" },
  { code: "41", name: "Souk Ahras" },
  { code: "42", name: "Tipaza" },
  { code: "43", name: "Mila" },
  { code: "44", name: "Aïn Defla" },
  { code: "45", name: "Naâma" },
  { code: "46", name: "Aïn Témouchent" },
  { code: "47", name: "Ghardaïa" },
  { code: "48", name: "Relizane" },
  { code: "49", name: "Timimoun" },
  { code: "50", name: "Bordj Badji Mokhtar" },
  { code: "51", name: "Ouled Djellal" },
  { code: "52", name: "Béni Abbès" },
  { code: "53", name: "In Salah" },
  { code: "54", name: "In Guezzam" },
  { code: "55", name: "Touggourt" },
  { code: "56", name: "Djanet" },
  { code: "57", name: "El M'Ghair" },
  { code: "58", name: "El Meniaa" },
];

// ─── DAIRAS (keyed by wilaya code) ───────────────────────────────────────────

export const DAIRAS: Record<string, string[]> = {
  "16": [
    "Alger-Centre",
    "Sidi M'Hamed",
    "El Madania",
    "Belouizdad",
    "Bab El Oued",
    "Bologhine",
    "Casbah",
    "Oued Koriche",
    "Birmandreis",
    "El Harrach",
    "Baraki",
    "Ain Taya",
    "Bab Ezzouar",
    "Ben Aknoun",
    "Dar El Beida",
    "Rouiba",
  ],
  "31": [
    "Oran",
    "Arzew",
    "Bethioua",
    "Bir El Djir",
    "Es Sénia",
    "Gdyel",
    "Marsat El Hadjadj",
    "Oued Tlelat",
    "Sidi Chami",
    "Tafraoui",
  ],
  "25": [
    "Constantine",
    "Aïn Abid",
    "El Khroub",
    "Hamma Bouziane",
    "Ibn Ziad",
    "Zighoud Youcef",
  ],
  "23": [
    "Annaba",
    "Berrahal",
    "El Hadjar",
    "El Bouni",
    "Sidi Amar",
    "Aïn Berda",
    "Chetaïbi",
  ],
  "19": [
    "Sétif",
    "Ain Azel",
    "Ain El Kebira",
    "Ain Oulmene",
    "Amoucha",
    "Beni Aziz",
    "Bouandas",
    "El Eulma",
    "Guenzet",
  ],
  "09": [
    "Blida",
    "Boufarik",
    "Larbaa",
    "Meftah",
    "Oued El Alleug",
    "Bougara",
    "Chiffa",
    "Mouzaia",
  ],
  "35": [
    "Boumerdès",
    "Baghlia",
    "Boudouaou",
    "Bou Teldja",
    "Chabet El Ameur",
    "Corso",
    "Dellys",
    "Hammedi",
    "Isser",
    "Khemis El Khechna",
    "Ouled Moussa",
    "Si Mustapha",
    "Thenia",
  ],
};

// Fallback dairas for wilayas without specific data
export const DEFAULT_DAIRAS = ["Chef-lieu", "Autre daïra"];

export function getDairas(wilayaCode: string): string[] {
  return DAIRAS[wilayaCode] ?? DEFAULT_DAIRAS;
}

// ─── SOCIAL PLATFORMS ────────────────────────────────────────────────────────

export interface SocialPlatform {
  id: string;
  label: string;
  placeholder: string;
  color: string;
  bgColor: string;
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "instagram",
    label: "Instagram",
    placeholder: "https://instagram.com/votre-profil",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    id: "facebook",
    label: "Facebook",
    placeholder: "https://facebook.com/votre-profil",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "tiktok",
    label: "TikTok",
    placeholder: "https://tiktok.com/@votre-profil",
    color: "text-gray-900",
    bgColor: "bg-gray-50",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    placeholder: "https://linkedin.com/in/votre-profil",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    placeholder: "https://x.com/votre-profil",
    color: "text-gray-800",
    bgColor: "bg-gray-50",
  },
  {
    id: "youtube",
    label: "YouTube",
    placeholder: "https://youtube.com/@votre-chaîne",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    placeholder: "https://wa.me/213XXXXXXXX",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "telegram",
    label: "Telegram",
    placeholder: "https://t.me/votre-profil",
    color: "text-sky-500",
    bgColor: "bg-sky-50",
  },
  {
    id: "snapchat",
    label: "Snapchat",
    placeholder: "https://snapchat.com/add/votre-profil",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    id: "website",
    label: "Site web",
    placeholder: "https://votre-site.com",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

// ─── SAMPLE PROFILE (for /p/demo) ─────────────────────────────────────────────

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  color: string;
  bgColor: string;
}

export interface ProfileData {
  slug: string;
  displayName: string;
  bio: string;
  avatarUrl: string | null;
  coverUrl: string | null;
  socialLinks: SocialLink[];
}

export const DEMO_PROFILE: ProfileData = {
  slug: "demo",
  displayName: "Ahmed Benali",
  bio: "Entrepreneur & Développeur web 🇩🇿 | Co-fondateur @StartupDZ | Passionné par la tech et l'innovation en Algérie.",
  avatarUrl: null,
  coverUrl: null,
  socialLinks: [
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://instagram.com/demo",
      color: "text-pink-600",
      bgColor: "bg-gradient-to-r from-pink-500 to-orange-400",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/in/demo",
      color: "text-blue-700",
      bgColor: "bg-blue-600",
    },
    {
      platform: "facebook",
      label: "Facebook",
      url: "https://facebook.com/demo",
      color: "text-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      platform: "whatsapp",
      label: "WhatsApp",
      url: "https://wa.me/213555000000",
      color: "text-green-600",
      bgColor: "bg-green-500",
    },
    {
      platform: "website",
      label: "Mon site web",
      url: "https://example.com",
      color: "text-indigo-600",
      bgColor: "bg-indigo-600",
    },
  ],
};

export const MOCK_PROFILES: ProfileData[] = [DEMO_PROFILE];

export function getProfileBySlug(slug: string): ProfileData | null {
  return MOCK_PROFILES.find((p) => p.slug === slug) ?? null;
}

// ─── SAMPLE ORDERS (for dashboard) ───────────────────────────────────────────

export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

export interface OrderItem {
  productName: string;
  quantity: number;
  unitPriceDA: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  createdAt: string;
  totalDA: number;
  items: OrderItem[];
}

export const STATUS_LABELS: Record<OrderStatus, string> = {
  PENDING: "En attente",
  CONFIRMED: "Confirmée",
  PROCESSING: "En préparation",
  SHIPPED: "Expédiée",
  DELIVERED: "Livrée",
  CANCELLED: "Annulée",
};

export const STATUS_COLORS: Record<OrderStatus, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  CONFIRMED: "bg-blue-100 text-blue-800",
  PROCESSING: "bg-indigo-100 text-indigo-800",
  SHIPPED: "bg-purple-100 text-purple-800",
  DELIVERED: "bg-green-100 text-green-800",
  CANCELLED: "bg-red-100 text-red-800",
};

export const SAMPLE_ORDERS: Order[] = [
  {
    id: "ord-1",
    orderNumber: "TC-2025-48291",
    status: "DELIVERED",
    createdAt: "2025-03-15",
    totalDA: 3000,
    items: [{ productName: "Carte NFC", quantity: 2, unitPriceDA: 1500 }],
  },
  {
    id: "ord-2",
    orderNumber: "TC-2025-61037",
    status: "PROCESSING",
    createdAt: "2025-04-10",
    totalDA: 5000,
    items: [
      { productName: "Carte NFC", quantity: 1, unitPriceDA: 1500 },
      { productName: "Plaque NFC", quantity: 1, unitPriceDA: 3500 },
    ],
  },
];
