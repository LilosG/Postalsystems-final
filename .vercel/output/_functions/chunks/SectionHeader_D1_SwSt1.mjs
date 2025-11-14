import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_TujFDRGz.mjs';
import 'clsx';

const $$Astro = createAstro("https://sandiegocommercialmailboxes.com");
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const { title, subtitle = "", sub = "", eyebrow = "", align = "left" } = Astro2.props;
  const textAlign = align === "center" ? "text-center" : "text-left";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(textAlign, "class")}> ${eyebrow && renderTemplate`<div class="text-xs uppercase tracking-wider text-primary-700">${eyebrow}</div>`} <h2 class="text-2xl md:text-3xl font-semibold">${title}</h2> ${(subtitle || sub) && renderTemplate`<p class="text-gray-600 max-w-prose">${subtitle || sub}</p>`} </div>`;
}, "/Users/michaelprickett/Desktop/postalsystems-final/src/components/ui/SectionHeader.astro", void 0);

export { $$SectionHeader as $ };
