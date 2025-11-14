import { o as decodeKey } from './chunks/astro/server_TujFDRGz.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Cs-P8wEN.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/michaelprickett/Desktop/postalsystems-final/","cacheDir":"file:///Users/michaelprickett/Desktop/postalsystems-final/node_modules/.astro/","outDir":"file:///Users/michaelprickett/Desktop/postalsystems-final/dist/","srcDir":"file:///Users/michaelprickett/Desktop/postalsystems-final/src/","publicDir":"file:///Users/michaelprickett/Desktop/postalsystems-final/public/","buildClientDir":"file:///Users/michaelprickett/Desktop/postalsystems-final/dist/client/","buildServerDir":"file:///Users/michaelprickett/Desktop/postalsystems-final/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"service-areas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service-areas","isIndex":true,"type":"page","pattern":"^\\/service-areas\\/?$","segments":[[{"content":"service-areas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service-areas/index.astro","pathname":"/service-areas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"who-we-work-with/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/who-we-work-with","isIndex":false,"type":"page","pattern":"^\\/who-we-work-with\\/?$","segments":[[{"content":"who-we-work-with","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/who-we-work-with.astro","pathname":"/who-we-work-with","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/lead","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/lead\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"lead","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/lead.ts","pathname":"/api/lead","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.boE2Jnvc.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.boE2Jnvc.css"}],"routeData":{"route":"/thank-you","isIndex":false,"type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.boE2Jnvc.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://sandiegocommercialmailboxes.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/blog/[post].astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/service-areas/[city]/[service].astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/service-areas/[city]/index.astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/service-areas/index.astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/services/[service].astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/services/index.astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}],["/Users/michaelprickett/Desktop/postalsystems-final/src/pages/who-we-work-with.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/lead@_@ts":"pages/api/lead.astro.mjs","\u0000@astro-page:src/pages/blog/[post]@_@astro":"pages/blog/_post_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/service-areas/[city]/[service]@_@astro":"pages/service-areas/_city_/_service_.astro.mjs","\u0000@astro-page:src/pages/service-areas/[city]/index@_@astro":"pages/service-areas/_city_.astro.mjs","\u0000@astro-page:src/pages/service-areas/index@_@astro":"pages/service-areas.astro.mjs","\u0000@astro-page:src/pages/services/[service]@_@astro":"pages/services/_service_.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"pages/thank-you.astro.mjs","\u0000@astro-page:src/pages/who-we-work-with@_@astro":"pages/who-we-work-with.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_g69en964.mjs","/Users/michaelprickett/Desktop/postalsystems-final/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_kI2Euhj_.mjs","/Users/michaelprickett/Desktop/postalsystems-final/src/data/areas.json":"chunks/areas_CQyypb6W.mjs","/Users/michaelprickett/Desktop/postalsystems-final/src/data/services.json":"chunks/services_CueKBjud.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.boE2Jnvc.css","/favicon.svg","/logo.svg","/robots.txt","/images/hero-mailbox.jpg","/images/hero-mailbox.png","/images/project-1.png","/images/project-2.png","/images/project-3.png","/about/index.html","/blog/index.html","/projects/index.html","/service-areas/index.html","/services/index.html","/who-we-work-with/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"UCzVdgOEBg9+BRiCVjbTqbt34yHZMU6ZQKBXujmPxdA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
