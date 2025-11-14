import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_TujFDRGz.mjs';
import { $ as $$SiteLayout } from '../chunks/SiteLayout_DDkmz5hv.mjs';
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  const title = "Thank You | Postal Systems";
  const description = "Thank you for contacting Postal Systems. A member of our team will follow up about your commercial mailbox project.";
  const canonical = "https://sandiegocommercialmailboxes.com/thank-you/";
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": title, "description": description, "canonical": canonical }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-ps-surface"> <section class="max-w-xl mx-auto px-4 lg:px-6 py-16 text-center"> <p class="text-[11px] font-semibold tracking-[0.2em] uppercase text-ps-navy/70">
Request Received
</p> <h1 class="mt-3 text-3xl sm:text-4xl font-semibold text-ps-navy">
Thank you for contacting Postal Systems.
</h1> <p class="mt-4 text-sm sm:text-base text-ps-navy/80">
We have received your request for a quote. A team member will review your project
        details and reach out shortly to confirm next steps and timing.
</p> <div class="mt-8 space-y-4 text-sm text-ps-navy/85"> <p>
If your request is urgent, you can reach us directly at
<a href="tel:16194614787" class="font-semibold hover:underline">
(619) 461-4787
</a>.
</p> <p>
In the meantime, you can learn more about our
<a href="/services/" class="underline hover:text-ps-red">
mailbox services
</a>
or review our
<a href="/service-areas/" class="underline hover:text-ps-red">
service areas
</a>.
</p> </div> <div class="mt-10 flex flex-wrap justify-center gap-3"> <a href="/" class="inline-flex items-center justify-center rounded-full bg-ps-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-ps-navy/90 transition">
Back to Home
</a> <a href="/services/" class="inline-flex items-center justify-center rounded-full border border-ps-navy px-5 py-2.5 text-sm font-semibold text-ps-navy hover:bg-ps-navy hover:text-white transition">
View Services
</a> </div> </section> </main> ` })}`;
}, "/Users/michaelprickett/Desktop/postalsystems-final/src/pages/thank-you.astro", void 0);

const $$file = "/Users/michaelprickett/Desktop/postalsystems-final/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
