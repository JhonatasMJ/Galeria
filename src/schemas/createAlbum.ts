import { z } from "zod";

export const createAlbumSchema = z.object({
  title: z.string().min(1, { message: "Campo obrigatório" }).max(255),
  photosIds: z.array(z.string().uuid()).optional(),
});


export type CreateAlbumSchema = z.infer<typeof createAlbumSchema>;