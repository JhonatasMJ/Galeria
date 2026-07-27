
import { AlbumsFilter } from "@/components/albums/albums-filter";
import PhotosList from "@/components/photos/photo-list";
import Container from "@/components/ui/container";

export default function Home() {
    return (
        <Container>
          <AlbumsFilter className="mb-9" albums={[{
            id: "1",
            title: "Album 1"
          }]} loading={false} />
          <PhotosList photos={[{
            id: "1",
            title: "Photo 1",
            imageId: "portrait-tower.png",
            albums: [{
                id: "1",
                title: "Album 1"
            }]
          }]} loading={false} />
        </Container>
    )
}