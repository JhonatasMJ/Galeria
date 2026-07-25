import type { Photo } from "@/types/https/photo";
import ImagePreview from "./image-preview";
import Skeleton from "./ui/skeleton";
import Text from "./ui/text";
import Badge from "./ui/badge";
import { buttonTextVariants, buttonVariants } from "./button";
import { Link } from "react-router-dom";

interface PhotoWidgetProps {
  photo: Photo;
  loading?: boolean;
}

export default function PhotoWidget({ photo, loading }: PhotoWidgetProps) {
  return (
    <div className="flex flex-col gap-4">
      {!loading ? (
        <ImagePreview
          title={photo.title}
          src={`/images/${photo.imageId}`}
          alt={photo.title}
          className="w-full h-1/2 rounded-lg"
        />
      ) : (
        <Skeleton className="w-full h-[13rem] rounded-lg" />
      )}
      <div className="flex flex-col gap-2">
        {!loading ? (
          <Text variant="paragraph-large" className="truncate">
            {photo.title}
          </Text>
        ) : (
          <Skeleton className="w-full h-6" />
        )}
      </div>
      <div className="flex gap-1 min-h-[1.375rem]">
        {!loading ? (
          <>
            {/* Pego apenas o primeiro album */}
            {photo.albums.slice(0, 2).map((album) => (
              <Badge className="truncate" size="xs" key={album.id}>
                {album.title}
              </Badge>
            ))}
            {/* Se o número de albums for maior que 1, exibo o número de albums - 1 */}
            {photo.albums.length > 2 && (
              <Badge size="xs">+{photo.albums.length - 2}</Badge>
            )}
          </>
        ) : (
          /* Exibo 2 skeletons para o número de albums */
          Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              className="w-full h-4 rounded-sm"
              key={`album-loading-${index}`}
            />
          ))
        )}
      </div>
      {!loading ? (
        <Link
          className={buttonVariants({ variant: "secondary", className: "px-2 py-2" })}
          to={`/photo/${photo.id}`}
        >
          <Text
            className={buttonTextVariants({ variant: "secondary", size: "sm" })}
          >
            Detalhes da imagem
          </Text>
        </Link>
      ) : (
        <Skeleton className="w-full h-10" />
      )}
    </div>
  );
}
