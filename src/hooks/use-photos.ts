import { fetcher } from "@/helpers/api";
import type { Photo } from "@/types/https/photo";
import { useQuery } from "@tanstack/react-query";
import { useQueryState, createSerializer, parseAsString } from "nuqs";

// Serializer para converter o estado em query params
const toSearchParams = createSerializer({
    albumId: parseAsString,
    q: parseAsString,
});

export default function usePhotos() {
    const [albumId, setAlbumId] = useQueryState("albumId");
    const [q, setQ] = useQueryState("q");

    const {data, isLoading } = useQuery<Photo[]>({
        queryKey: ["photos", albumId, q],
        queryFn: () => fetcher(`/photos${toSearchParams({ albumId, q })}`),
        
    })
    return { photos:data ?? [],  isLoadingPhotos: isLoading, filters: {
        albumId,
        setAlbumId,
        q,
        setQ,
    } };
}