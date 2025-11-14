export const SITE = {
  title: "Postal Systems",
  description:
    "USPS-approved commercial mailbox installation, repair, and upgrades across Southern California.",
  url: "https://sandiegocommercialmailboxes.com",
} as const;

export type Service = {
  slug: string;
  name: string;
  summary: string;
  content: string;
  blurb?: string;
  bullets?: string[];
};

import services from "./services.json";
export const SERVICES: Service[] = (services as any[]).map((s) => ({
  slug: String(s.slug ?? s.name ?? "")
    .toLowerCase()
    .replace(/\s+/g, "-"),
  name: s.name ?? "",
  summary: s.summary ?? s.blurb ?? "",
  content: s.content ?? "",
  blurb: s.blurb,
  bullets: Array.isArray(s.bullets) ? s.bullets : undefined,
}));

export const ALL_CITIES = [
  { slug: "san-diego", name: "San Diego" },
  { slug: "chula-vista", name: "Chula Vista" },
  { slug: "oceanside", name: "Oceanside" },
  { slug: "carlsbad", name: "Carlsbad" },
  { slug: "encinitas", name: "Encinitas" },
  { slug: "escondido", name: "Escondido" },
  { slug: "vista", name: "Vista" },
  { slug: "san-marcos", name: "San Marcos" },
  { slug: "poway", name: "Poway" },
  { slug: "el-cajon", name: "El Cajon" },
  { slug: "temecula", name: "Temecula" },
  { slug: "riverside-county", name: "Riverside County" },
  { slug: "orange-county", name: "Orange County" },
];

export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  location?: string;
};
export const testimonials: Testimonial[] = [
  {
    quote: "Fast install, USPS sign-off with zero headaches.",
    author: "Property Manager, San Diego",
  },
  {
    quote: "Clean work and great communication.",
    author: "HOA Board Member, Carlsbad",
  },
  {
    quote: "Handled ADA clearances and inspection for us.",
    author: "Facilities Director, Encinitas",
  },
];
