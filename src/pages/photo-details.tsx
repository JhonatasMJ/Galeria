import AlbumsSelectable from "@/components/albums/albums-selectable";
import Button from "@/components/button";
import ImagePreview from "@/components/image-preview";
import PhotoDeleteDialog from "@/components/photos/photo-delete-dialog";
import PhotosNavigator from "@/components/photos/photos-navigator";
import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";
import Text from "@/components/ui/text";
import useAlbums from "@/hooks/use-albums";
import usePhoto from "@/hooks/use-photo";
import type { Photo } from "@/types/https/photo";
import { useParams } from "react-router-dom";

export default function PhotoDetails() {
  const { id } = useParams();
  const { albums, isLoadingAlbums } = useAlbums();
  const { photo, isLoadingPhoto } = usePhoto(id);

  if (!isLoadingPhoto && !photo) {
    return <div>Foto não encontrada</div>;
  }

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
              src={`${import.meta.env.VITE_API_URL}/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}
          {!isLoadingPhoto ? (
            <PhotoDeleteDialog
              trigger={<Button variant="destructive">Excluir</Button>}
            />
          ) : (
            <Skeleton className="w-full h-10" />
          )}
        </div>
        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-7">
            Álbuns
          </Text>
          <AlbumsSelectable
            albums={albums}
            photo={photo as Photo}
            loading={isLoadingAlbums}
          />
        </div>
      </div>
    </Container>
  );
}
