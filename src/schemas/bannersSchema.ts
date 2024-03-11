import { z } from "astro/zod";
import { PlatformEnum } from "../enum/PlatformEnum";

export const bannerSchema = z.object({
  overline: z.string(),
  title: z.string(),
  description: z.string(),
  platforms: z.nativeEnum(PlatformEnum).array(),
  cartUrl: z.string().url(),
  url: z.string().url(),
  cover: z.string(),
});

export interface IBanner extends z.infer<typeof bannerSchema> {}
