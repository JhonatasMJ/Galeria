import { fetcher } from "@/helpers/api";
import type { Photo } from "@/types/https/photo";
import { useQuery } from "@tanstack/react-query";

interface PhotoDetailResponse extends Photo {
    nextPhotoId?: string;
    previousPhotoId?: string;
}

export default function usePhoto(id?:string) {
    const {data, isLoading } = useQuery<PhotoDetailResponse>({
        queryKey: ["photo", id],
        queryFn: () => fetcher(`/photos/${id}`),
        enabled: !!id, 
    })
    return {
        photo: data,
        isLoadingPhoto: isLoading,
        nextPhotoId: data?.nextPhotoId,
        previousPhotoId: data?.previousPhotoId,
    }

}