import { SITE } from "../data/site";
export const siteTitle = SITE.title;
export const siteDesc =
  "USPS-approved commercial mailbox installation, replacements, and parcel locker solutions across San Diego County.";
export function titleTag(input?: string) {
  return input
    ? `${input} | ${siteTitle}`
    : `${siteTitle} — Commercial Mailbox Installers`;
}
export function metaDesc(input?: string) {
  return input && input.trim().length > 0 ? input : siteDesc;
}
export function canonical(pathname?: string) {
  const base = SITE.url.replace(/\/+$/, "");
  if (!pathname) return base + "/";
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${p}`;
}
