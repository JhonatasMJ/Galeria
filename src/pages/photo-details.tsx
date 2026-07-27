import PhotosNavigator from "@/components/photos/photos-navigator";
import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";
import Text from "@/components/ui/text";
import type { Photo } from "@/types/https/photo";
/* import { useParams } from "react-router-dom"; */

export default function PhotoDetails() {
/*   const { id } = useParams(); */
  const isLoadingPhoto = false;
  const photo = {} as Photo;
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
    </Container>
  );
}
