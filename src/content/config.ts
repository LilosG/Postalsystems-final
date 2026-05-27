import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    publishDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Postal Systems"),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    serviceAreas: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
