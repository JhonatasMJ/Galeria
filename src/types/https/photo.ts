import type { Album } from "@/types/https/album";

export interface Photo {
    id: string;
    title: string;
    imageId: string;
    albums: Album[]
}