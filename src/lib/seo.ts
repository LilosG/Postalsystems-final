import { SITE } from "../data/site";

export const siteTitle = SITE.title;
export const siteDesc =
  "USPS-approved commercial mailbox installation, replacements, and parcel locker solutions across San Diego County.";

const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 155;

function collapseWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function decodeEntities(value: string) {
  return value.replace(/&amp;/g, "&");
}

function truncateAtWord(value: string, max: number) {
  if (value.length <= max) return value;
  const cut = value.slice(0, max + 1);
  const idx = cut.lastIndexOf(" ");
  const clipped = idx > 18 ? cut.slice(0, idx) : value.slice(0, max);
  return collapseWhitespace(clipped.replace(/[\s,;:-]+$/, ""));
}

function compactServiceTitle(value: string) {
  return value
    .replace(/Mailbox Relocation\s*&\s*Consolidation/gi, "Mailbox Relocation")
    .replace(/Mailbox Replacement\s*&\s*Retrofits/gi, "Mailbox Replacement")
    .replace(/Repairs\s*&\s*Lock Changes/gi, "Mailbox Repairs")
    .replace(/:\s*(When|How|Why)\b.*$/i, "")
    .replace(/\s+—\s+Mailbox Services/gi, "")
    .replace(/\s+—\s+Postal Systems/gi, "")
    .replace(new RegExp(`\\s*\\|\\s*${siteTitle}$`, "i"), "")
    .replace(/,\s*CA\b/g, " CA");
}

function enforceDescriptionLength(input: string) {
  let output = collapseWhitespace(input);

  if (output.length < DESC_MIN) {
    output = collapseWhitespace(
      `${output} Call Postal Systems for a USPS-approved commercial mailbox quote in San Diego County.`
    );
  }

  if (output.length > DESC_MAX) {
    output = truncateAtWord(output, DESC_MAX);
  }

  if (output.length < DESC_MIN) {
    output = truncateAtWord(
      "USPS-approved commercial mailbox installation, replacement, and repair for HOAs and apartments in San Diego County. Request a quote from Postal Systems today.",
      DESC_MAX
    );
  }

  return output;
}

function enforceTitleLength(input: string) {
  const normalized = compactServiceTitle(collapseWhitespace(decodeEntities(input)));

  const withBrand = `${normalized} | ${siteTitle}`;
  if (withBrand.length <= TITLE_MAX) return withBrand;

  // Prefer preserving full location by compacting service phrase first.
  const compacted = compactServiceTitle(normalized)
    .replace(/Commercial Mailbox Installation/gi, "Mailbox Installation")
    .replace(/ADA-Compliant Installs/gi, "ADA Mailbox Installs");
  const compactWithBrand = `${compacted} | ${siteTitle}`;
  if (compactWithBrand.length <= TITLE_MAX) return compactWithBrand;

  // Fallback to safe truncation with brand suffix.
  let truncatedCore = truncateAtWord(compacted, 42);
  truncatedCore = truncatedCore.replace(/\b(in|on|at|for|with|when|how|why)$/i, "").trim();
  return `${truncatedCore} | ${siteTitle}`;
}

export function titleTag(input?: string) {
  if (!input || input.trim().length === 0) {
    return enforceTitleLength(`${siteTitle} Commercial Mailbox Installers`);
  }

  return enforceTitleLength(input);
}

export function metaDesc(input?: string) {
  const raw = input && input.trim().length > 0 ? input : siteDesc;
  return enforceDescriptionLength(raw);
}

export function canonical(pathname?: string) {
  const base = SITE.url.replace(/\/+$/, "");
  if (!pathname) return base + "/";
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${p}`;
}
