import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Both collections are plain Markdown in src/content, which is what Pages CMS
 * edits — see .pages.yml. Keep the schemas and the CMS field list in step.
 */

/**
 * A CMS field left blank is written out as `""`, not omitted. Treat that as
 * absent so an emptied field never renders as a broken image or a dead link.
 */
const optionalText = z
  .string()
  .optional()
  .transform((value) => (value?.trim() ? value.trim() : undefined));

const optionalUrl = optionalText.pipe(z.string().url().optional());

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    /** Position in the Selected Work run, and the number printed beside it. */
    order: z.number(),
    category: z.string(),
    status: z.enum(["shipped", "wip", "archived"]).default("shipped"),
    /** One or two sentences for the landing row. */
    summary: z.string(),
    /** The larger opening line on the writeup itself; falls back to summary. */
    lede: optionalText,
    tags: z.array(z.string()).default([]),
    image: optionalText,
    imageAlt: optionalText,
    imageCaption: optionalText,
    repo: optionalUrl,
    live: optionalUrl,
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, notes };
