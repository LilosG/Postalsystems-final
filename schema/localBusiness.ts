export const postalSystemsLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sandiegocommercialmailboxes.com/#local-business",
  name: "Postal Systems",
  description:
    "USPS-approved commercial mailbox installation, repair and replacement. We install Cluster Box Units (CBUs), parcel lockers, 4C mailboxes, and ADA-compliant mailbox stations; pour pads and set anchors; coordinate USPS inspection; perform lock and key changeouts; and provide warranty and ongoing support.",
  telephone: "(619) 461-4787",
  email: "info@postalsystemspro.com",
  priceRange: "$$-$$$",
  image:
    "https://sandiegocommercialmailboxes.com/images/logo/logo-main.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1309 Nordahl Rd",
    addressLocality: "Escondido",
    addressRegion: "CA",
    postalCode: "92026",
    addressCountry: "US",
  },
  areaServed: [
    "San Diego County, CA",
    "Select cities in Orange County, CA",
    "Select cities in Riverside County, CA",
  ],
  url: "https://sandiegocommercialmailboxes.com/",
  sameAs: [] as string[],
  license: "Licensed, Bonded & Insured • CA Lic. #904106",
} as const

export default postalSystemsLocalBusinessSchema
