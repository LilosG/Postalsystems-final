import type { APIRoute } from "astro";
export const prerender = false;
export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const payload = Object.fromEntries(data.entries());
  console.log("Lead", payload);
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};
