import { postalSystemsLocalBusinessSchema } from "./localBusiness";

/**
 * Input to build page-specific Service JSON-LD.
 */
export interface ServiceSchemaInput {
  name: string;
  description: string;
  serviceUrl: string;
  areaServedCity?: string;
  areaServedState?: string;
}

/**
 * Build JSON-LD for a specific service page, combining:
 * - The global LocalBusiness schema
 * - A page-specific Service schema tied to that business
 */
export function buildServicePageSchema(input: ServiceSchemaInput) {
  const { name, description, serviceUrl, areaServedCity, areaServedState } = input;

  const service: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@id": "https://sandiegocommercialmailboxes.com/#local-business",
    },
    url: serviceUrl,
  };

  if (areaServedCity) {
    service.areaServed = {
      "@type": "City",
      name: areaServedState
        ? `${areaServedCity}, ${areaServedState}`
        : areaServedCity,
    };
  }

  // Return an array so <script type="application/ld+json"> contains
  // both LocalBusiness and Service in one JSON document.
  return [postalSystemsLocalBusinessSchema, service];
}

export default buildServicePageSchema;
