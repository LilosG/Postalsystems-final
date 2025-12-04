export function getServiceSchema(options: {
  serviceName: string;
  servicePath: string; // path like "/services/commercial-mailbox-installation/"
  description: string;
  primaryAreaName?: string; // e.g. "San Diego County, CA"
}) {
  const {
    serviceName,
    servicePath,
    description,
    primaryAreaName = "San Diego County, CA",
  } = options;

  const url = `https://sandiegocommercialmailboxes.com${servicePath.replace(/\/+$/, "")}/`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    "name": serviceName,
    "serviceType": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://sandiegocommercialmailboxes.com/#local-business"
    },
    "areaServed": {
      "@type": "Place",
      "name": primaryAreaName
    },
    "url": url
  };
}
