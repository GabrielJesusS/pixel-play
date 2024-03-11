import { z } from "astro/zod";

export const mosaicSchema = z.object({
  url: z.string().url(),
  cover: z.string(),
  badge: z.string(),
  title: z.string(),
  description: z.string(),
});

export interface IMosaic extends z.infer<typeof mosaicSchema> {}
