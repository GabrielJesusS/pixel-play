import { z } from "astro/zod";
import { PlatformEnum } from "../enum/PlatformEnum";

export const cardSchema = z.object({
  id: z.string(),
  image: z.string(),
  title: z.string(),
  price: z.number(),
  genre: z.string(),
  discountPrice: z.number().optional(),
  discount: z.number().optional(),
  isPreorder: z.boolean().optional(),
  platforms: z.nativeEnum(PlatformEnum).array().optional(),
});

export interface ICard extends z.infer<typeof cardSchema> {}
