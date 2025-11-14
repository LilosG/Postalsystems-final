export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const data = await request.formData();
  const payload = Object.fromEntries(data.entries());
  console.log("Lead", payload);
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
