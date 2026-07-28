import { fetcher } from "@/helpers/api";
import type { Album } from "@/types/https/album";
import { useQuery } from "@tanstack/react-query";

export default function useAlbums() {
    const {data, isLoading } = useQuery<Album[]>({
        queryKey: ["albums"],
        queryFn: () => fetcher("/albums"),
        
    })
    return { albums:data ?? [], isLoading };
}