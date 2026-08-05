import { api, fetcher } from "@/helpers/api";
import type { CreatePhotoSchema } from "@/schemas/createPhoto";
import type { Photo } from "@/types/https/photo";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface PhotoDetailResponse extends Photo {
  nextPhotoId?: string;
  previousPhotoId?: string;
}

export default function usePhoto(id?: string) {
  const { data, isLoading } = useQuery<PhotoDetailResponse>({
    queryKey: ["photo", id],
    queryFn: () => fetcher(`/photos/${id}`),
    enabled: !!id,
  });

  const queryClient = useQueryClient();

  async function createPhoto(payload: CreatePhotoSchema) {
    // eslint-disable-next-line no-useless-catch
    try {
      const { data } = await api.post<Photo>("/photos", {
        title: payload.title,
      });
      await api.post(
        `/photos/${data.id}/image`,
        {
          file: payload.file[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (payload.albumsIds && payload.albumsIds.length > 0) {
        await api.put(`/photos/${data.id}/albums`, {
          albumsIds: payload.albumsIds,
        });
      }

      queryClient.invalidateQueries({ queryKey: ["photos"] });
      toast.success("Foto criada com sucesso");
    } catch (error) {
      toast.error("Erro ao criar foto");
      throw error;
    }
  }
  return {
    createPhoto,
    photo: data,
    isLoadingPhoto: isLoading,
    nextPhotoId: data?.nextPhotoId,
    previousPhotoId: data?.previousPhotoId,
  };
}
