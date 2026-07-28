import { fetcher } from "@/helpers/api";
import type { Photo } from "@/types/https/photo";
import { useQuery } from "@tanstack/react-query";

export default function usePhotos() {
    const {data, isLoading } = useQuery<Photo[]>({
        queryKey: ["photos"],
        queryFn: () => fetcher("/photos"),
        
    })
    return { photos:data ?? [],  isLoadingPhotos: isLoading };
}