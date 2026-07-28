import { AlbumsFilter } from "@/components/albums/albums-filter";
import PhotosList from "@/components/photos/photo-list";
import Container from "@/components/ui/container";
import useAlbums from "@/hooks/use-albums";

export default function Home() {
  const { albums, isLoading } = useAlbums();

  return (
    <Container>
      <AlbumsFilter className="mb-9" albums={albums} loading={isLoading} />
      <PhotosList
        photos={[
          {
            id: "1",
            title: "Photo 1",
            imageId: "portrait-tower.png",
            albums: [
              {
                id: "1",
                title: "Album 1",
              },
            ],
          },
        ]}
        loading={false}
      />
    </Container>
  );
}
