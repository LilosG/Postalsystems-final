export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const canonical = (path = "/") =>
  new URL(
    path,
    import.meta.env.SITE || "https://www.postalsystemspro.com",
  ).toString();
