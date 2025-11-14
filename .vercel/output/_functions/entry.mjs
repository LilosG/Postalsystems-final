import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_wYoCfwrR.mjs';
import { manifest } from './manifest_g69en964.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/lead.astro.mjs');
const _page3 = () => import('./pages/blog/_post_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/service-areas/_city_/_service_.astro.mjs');
const _page8 = () => import('./pages/service-areas/_city_.astro.mjs');
const _page9 = () => import('./pages/service-areas.astro.mjs');
const _page10 = () => import('./pages/services/_service_.astro.mjs');
const _page11 = () => import('./pages/services.astro.mjs');
const _page12 = () => import('./pages/thank-you.astro.mjs');
const _page13 = () => import('./pages/who-we-work-with.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/lead.ts", _page2],
    ["src/pages/blog/[post].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/projects.astro", _page6],
    ["src/pages/service-areas/[city]/[service].astro", _page7],
    ["src/pages/service-areas/[city]/index.astro", _page8],
    ["src/pages/service-areas/index.astro", _page9],
    ["src/pages/services/[service].astro", _page10],
    ["src/pages/services/index.astro", _page11],
    ["src/pages/thank-you.astro", _page12],
    ["src/pages/who-we-work-with.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "fe3b4e39-63e3-4b5a-a8c1-afd26e5e7b05",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
