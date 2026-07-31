import { z } from "zod";

export const createPhotoSchema = z.object({
  title: z.string().min(1, { message: "Campo obrigatório" }).max(255),
  file: z
    .instanceof(FileList)
    .refine((file) => file.length > 0, { message: "Arquivo obrigatório" }),
  albumsIds: z.array(z.string().uuid()).optional(),
});


export type CreatePhotoSchema = z.infer<typeof createPhotoSchema>;