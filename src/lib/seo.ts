import { SITE } from "../data/site";
export const siteTitle = SITE.title;
export const siteDesc =
  "USPS-approved commercial mailbox installation, replacements, and parcel locker solutions across San Diego County.";
export function titleTag(input?: string) {
  if (!input || input.trim().length === 0) {
    return `${siteTitle} — Commercial Mailbox Installers`;
  }
  const normalized = input.trim();
  if (normalized.includes(siteTitle)) {
    return normalized;
  }
  return `${normalized} | ${siteTitle}`;
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
