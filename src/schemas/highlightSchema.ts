import { z } from "astro/zod";
import { PlatformEnum } from "../enum/PlatformEnum";

export const highlightSchema = z.object({
  url: z.string().url(),
  name: z.string(),
  genre: z.string(),
  price: z.number(),
  image: z.string(),
  platforms: z.nativeEnum(PlatformEnum).array(),
});

export interface IHighlight extends z.infer<typeof highlightSchema> {}
