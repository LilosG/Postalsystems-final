import type { APIRoute } from "astro";
export const prerender = false;
const MAX_FIELD_LENGTH = 2000;

function normalizeEntry(value: FormDataEntryValue) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get("content-type") ?? "";
  const isForm =
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data");

  if (!isForm) {
    return new Response(JSON.stringify({ ok: false, error: "Unsupported content type." }), {
      status: 415,
      headers: { "content-type": "application/json" },
    });
  }

  const data = await request.formData();
  const payload = Object.fromEntries(
    Array.from(data.entries(), ([key, value]) => [key, normalizeEntry(value)])
  ) as Record<string, string>;

  if (payload._gotcha) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  const requiredFields = ["name", "email", "phone"];
  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length > 0) {
    return new Response(
      JSON.stringify({ ok: false, error: "Missing required fields." }),
      {
        status: 400,
        headers: { "content-type": "application/json" },
      }
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};
