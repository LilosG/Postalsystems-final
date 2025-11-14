import { e as createAstro, f as createComponent, l as renderHead, n as renderSlot, r as renderTemplate, h as addAttribute, u as unescapeHTML, m as maybeRenderHead, k as renderComponent } from './astro/server_TujFDRGz.mjs';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://sandiegocommercialmailboxes.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Postal Systems", description = "", schema, canonical } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}<link rel="icon" href="/favicon.ico">${renderHead()}</head> <body class="antialiased font-sans text-ps-navy"> <header>${renderSlot($$result, $$slots["header"])}</header> <main>${renderSlot($$result, $$slots["default"])}</main> <footer>${renderSlot($$result, $$slots["footer"])}</footer> ${schema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)))} </body> </html>`;
}, "/Users/michaelprickett/Desktop/postalsystems-final/src/layouts/BaseLayout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services/", label: "Services", key: "services" },
    { href: "/service-areas/", label: "Service Areas", key: "areas" },
    { href: "/who-we-work-with/", label: "Who We Work With" },
    { href: "/projects/", label: "Projects" },
    { href: "/blog/", label: "Blog" },
    { href: "/about/", label: "About" },
    { href: "/contact/", label: "Contact" }
  ];
  const services = [
    { href: "/services/commercial-mailbox-installation/", label: "Commercial mailbox installation" },
    { href: "/services/cbu-installation/", label: "CBU installation" },
    { href: "/services/4c-wall-mounted-mailboxes/", label: "4C wall-mounted mailboxes" },
    { href: "/services/parcel-lockers/", label: "Parcel lockers" },
    { href: "/services/repairs-lock-changes/", label: "Repairs & lock changes" },
    { href: "/services/ada-compliant-installs/", label: "ADA-compliant installs" }
  ];
  const areas = [
    { href: "/service-areas/san-diego/", label: "San Diego, CA" },
    { href: "/service-areas/carlsbad/", label: "Carlsbad, CA" },
    { href: "/service-areas/oceanside/", label: "Oceanside, CA" },
    { href: "/service-areas/san-marcos/", label: "San Marcos, CA" },
    { href: "/service-areas/escondido/", label: "Escondido, CA" },
    { href: "/service-areas/temecula/", label: "Temecula, CA" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#e53935] text-white text-[11px]"> <div class="max-w-6xl mx-auto px-4 lg:px-6 py-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"> <span>Now booking HOA mailbox replacements in San Diego County.</span> <a href="tel:16194614787" class="font-semibold underline-offset-2 hover:underline">
Call (619) 461-4787
</a> </div> </div> <nav class="bg-white border-b border-ps-muted shadow-sm"> <div class="max-w-6xl mx-auto px-4 lg:px-6 h-14 flex items-center justify-between gap-4"> <a href="/" class="flex items-center gap-2"> <span class="text-sm font-semibold text-ps-navy">Postal Systems</span> </a> <div class="hidden md:flex items-center gap-5 text-[13px] text-ps-navy"> ${navItems.map((item) => {
    if (item.key === "services") {
      return renderTemplate`<div class="relative group"> <a${addAttribute(item.href, "href")} class="inline-flex items-center gap-1 hover:text-ps-navy/70"> ${item.label} <span class="text-[10px]">▾</span> </a> <div class="pointer-events-none absolute left-0 top-full mt-2 w-64 rounded-2xl border border-ps-muted bg-white py-2 shadow-ps opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition"> ${services.map((svc) => renderTemplate`<a${addAttribute(svc.href, "href")} class="block px-3 py-1.5 text-[12px] text-ps-navy/90 hover:bg-ps-surface hover:text-ps-navy rounded-md"> ${svc.label} </a>`)} </div> </div>`;
    }
    if (item.key === "areas") {
      return renderTemplate`<div class="relative group"> <a${addAttribute(item.href, "href")} class="inline-flex items-center gap-1 hover:text-ps-navy/70"> ${item.label} <span class="text-[10px]">▾</span> </a> <div class="pointer-events-none absolute left-0 top-full mt-2 w-64 rounded-2xl border border-ps-muted bg-white py-2 shadow-ps opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition"> ${areas.map((area) => renderTemplate`<a${addAttribute(area.href, "href")} class="block px-3 py-1.5 text-[12px] text-ps-navy/90 hover:bg-ps-surface hover:text-ps-navy rounded-md"> ${area.label} </a>`)} </div> </div>`;
    }
    return renderTemplate`<a${addAttribute(item.href, "href")} class="hover:text-ps-navy/70"> ${item.label} </a>`;
  })} </div> <div class="flex items-center gap-2"> <a href="tel:16194614787" class="hidden sm:inline-flex text-[12px] font-medium text-ps-navy">
(619) 461-4787
</a> <a href="/contact/" class="inline-flex items-center justify-center rounded-full bg-ps-navy px-4 py-1.5 text-[12px] font-semibold text-white shadow-md hover:bg-ps-navy/90 transition">
Get a Quote
</a> </div> </div> </nav>`;
}, "/Users/michaelprickett/Desktop/postalsystems-final/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-ps-muted bg-white"> <div class="max-w-6xl mx-auto px-4 lg:px-6 py-8 grid gap-8 md:grid-cols-4 text-xs text-ps-navy/80"> <div> <h2 class="text-sm font-semibold text-ps-navy">Postal Systems</h2> <p class="mt-2">
USPS-approved commercial mailbox installation, repair, and replacements for HOAs, apartments, builders, and facilities.
</p> <p class="mt-3">
Licensed, bonded & insured in California. CA Lic. #904106.
</p> </div> <div> <h3 class="text-[11px] font-semibold tracking-[0.16em] uppercase text-ps-navy">Services</h3> <ul class="mt-2 space-y-1"> <li><a href="/services/commercial-mailbox-installation/" class="hover:text-ps-navy">Commercial mailbox installation</a></li> <li><a href="/services/cbu-installation/" class="hover:text-ps-navy">CBU installation</a></li> <li><a href="/services/4c-wall-mounted-mailboxes/" class="hover:text-ps-navy">4C wall-mounted mailboxes</a></li> <li><a href="/services/parcel-lockers/" class="hover:text-ps-navy">Parcel lockers</a></li> <li><a href="/services/repairs-lock-changes/" class="hover:text-ps-navy">Repairs & lock changes</a></li> <li><a href="/services/ada-compliant-installs/" class="hover:text-ps-navy">ADA-compliant installs</a></li> </ul> </div> <div> <h3 class="text-[11px] font-semibold tracking-[0.16em] uppercase text-ps-navy">Service areas</h3> <ul class="mt-2 space-y-1"> <li><a href="/service-areas/san-diego/" class="hover:text-ps-navy">San Diego, CA</a></li> <li><a href="/service-areas/carlsbad/" class="hover:text-ps-navy">Carlsbad, CA</a></li> <li><a href="/service-areas/oceanside/" class="hover:text-ps-navy">Oceanside, CA</a></li> <li><a href="/service-areas/san-marcos/" class="hover:text-ps-navy">San Marcos, CA</a></li> <li><a href="/service-areas/escondido/" class="hover:text-ps-navy">Escondido, CA</a></li> <li><a href="/service-areas/temecula/" class="hover:text-ps-navy">Temecula, CA</a></li> </ul> </div> <div> <h3 class="text-[11px] font-semibold tracking-[0.16em] uppercase text-ps-navy">Contact</h3> <p class="mt-2">
Phone: <a href="tel:16194614787" class="font-semibold hover:text-ps-navy">(619) 461-4787</a> </p> <p class="mt-1">
Email: <a href="mailto:info@postalsystemsmpro.com" class="font-semibold hover:text-ps-navy">info@postalsystemsmpro.com</a> </p> <p class="mt-3">
Based in San Diego County, serving nearby cities plus select projects in Temecula, Riverside County, and Orange County.
</p> <p class="mt-3"> <a href="/contact/" class="inline-flex items-center justify-center rounded-full bg-ps-navy px-4 py-1.5 text-[12px] font-semibold text-white shadow-md hover:bg-ps-navy/90 transition">
Request a quote
</a> </p> </div> </div> <div class="border-t border-ps-muted bg-ps-surface"> <div class="max-w-6xl mx-auto px-4 lg:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-ps-navy/70"> <span>© ${year} Postal Systems. All rights reserved.</span> <span>USPS-approved contractor for commercial mailbox systems.</span> </div> </div> </footer>`;
}, "/Users/michaelprickett/Desktop/postalsystems-final/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://sandiegocommercialmailboxes.com");
const $$SiteLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SiteLayout;
  const { title, description, canonical } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "canonical": canonical }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/Users/michaelprickett/Desktop/postalsystems-final/src/layouts/SiteLayout.astro", void 0);

export { $$SiteLayout as $, $$Header as a, $$Footer as b };
