export type BreadcrumbInput = {
  label: string;
  href: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbInput[]) {
  const normalized = items
    .filter((item) => item?.label && item?.href)
    .map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    }));

  if (normalized.length < 2) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: normalized,
  };
}

export function appendBreadcrumbSchema(existing: unknown, breadcrumb: unknown) {
  if (!breadcrumb) return existing;
  if (!existing) return breadcrumb;
  return Array.isArray(existing) ? [...existing, breadcrumb] : [existing, breadcrumb];
}
