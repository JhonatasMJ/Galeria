import { AlbumsFilter } from "@/components/albums/albums-filter";
import PhotosList from "@/components/photos/photo-list";
import Container from "@/components/ui/container";
import useAlbums from "@/hooks/use-albums";
import usePhotos from "@/hooks/use-photos";

export default function Home() {
  const { albums, isLoadingAlbums } = useAlbums();
  const { photos, isLoadingPhotos } = usePhotos();

  return (
    <Container>
      <AlbumsFilter
        className="mb-9"
        albums={albums}
        loading={isLoadingAlbums}
      />
      <PhotosList photos={photos} loading={isLoadingPhotos} />
    </Container>
  );
}
