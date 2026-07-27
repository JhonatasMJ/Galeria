import Button from "@/components/button";
import ImagePreview from "@/components/image-preview";
import PhotosNavigator from "@/components/photos/photos-navigator";
import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";
import Text from "@/components/ui/text";
import type { Photo } from "@/types/https/photo";
/* import { useParams } from "react-router-dom"; */

export default function PhotoDetails() {
  /*   const { id } = useParams(); */
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
      <div className="grid grid-cols-[21rem] gap-24">
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
      </div>
    </Container>
  );
}
