import AlbumsSelectable from "@/components/albums/albums-selectable";
import Button from "@/components/button";
import ImagePreview from "@/components/image-preview";
import PhotosNavigator from "@/components/photos/photos-navigator";
import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";
import Text from "@/components/ui/text";
import useAlbums from "@/hooks/use-albums";
import type { Photo } from "@/types/https/photo";
/* import { useParams } from "react-router-dom"; */

export default function PhotoDetails() {
  /*   const { id } = useParams(); */
  const {albums, isLoading} = useAlbums();
  const isLoadingPhoto = false;
  const photo = {
    id: "1",
    title: "Photo 1",
    imageId: "portrait-tower.png",
    albums: [
      {
        id: "1",
        title: "Album 1",
      },
      {
        id: "2",
        title: "Album 2",
      },
      {
        id: "3",
        title: "Album 3",
      },
    ],
  } as Photo;
  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}
        <PhotosNavigator />
      </header>
      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="flex flex-col gap-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}
          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-full h-10" />
          )}
        </div>
        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-7">Álbuns</Text>
          <AlbumsSelectable albums={albums} photo={photo} loading={isLoading} />
        </div>
      </div>
    </Container>
  );
}
