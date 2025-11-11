/** Central site data used across pages */
import services from "./services.json";
import areas from "./service-areas.json";

export type Service = {
  name: string;
  slug: string;
  blurb?: string;
  bullets?: string[];
};

export type City = {
  name: string;
  slug: string;
  county?: string;
  priority?: number;
};

export const SITE = {
  name: "Postal Systems Pro",
  phone: "(619) 461-4787",
  email: "info@postalsystemspro.com",
  url: "https://postalsystemspro.com"
};

export const SERVICES: Service[] = services as Service[];

/** Prioritized city list: San Diego cities first, then Temecula */
const prioritized = (areas.cities as City[])
  .slice()
  .sort((a, b) =>
    (a.priority ?? 9) - (b.priority ?? 9) ||
    (areas.priorityOrder.indexOf(a.slug) - areas.priorityOrder.indexOf(b.slug))
  );

/** Pages in the repo already import ALL_CITIES from this module */
export const ALL_CITIES: City[] = prioritized;

/** LocalBusiness JSON-LD (San Diego first, keep Temecula / counties listed) */
export const LOCALBUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  telephone: SITE.phone,
  email: SITE.email,
  url: SITE.url,
  areaServed: [
    "San Diego County, CA",
    "Temecula, CA",
    "Riverside County, CA",
    "Orange County, CA"
  ]
};
