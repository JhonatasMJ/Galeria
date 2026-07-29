import { fetcher } from "@/helpers/api";
import type { Photo } from "@/types/https/photo";
import { useQuery } from "@tanstack/react-query";
import { useQueryState, createSerializer, parseAsString } from "nuqs";

// Serializer para converter o estado em query params
const toSearchParams = createSerializer({
    albumId: parseAsString
});

export default function usePhotos() {
    const [albumId, setAlbumId] = useQueryState("albumId");

    const {data, isLoading } = useQuery<Photo[]>({
        queryKey: ["photos", albumId],
        queryFn: () => fetcher(`/photos${toSearchParams({ albumId })}`),
        
    })
    return { photos:data ?? [],  isLoadingPhotos: isLoading, filters: {
        albumId,
        setAlbumId,
    } };
}