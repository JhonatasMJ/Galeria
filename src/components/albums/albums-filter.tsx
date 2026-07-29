import type { Album } from "@/types/https/album";
import Text from "../ui/text";
import Button from "../button";
import type { ComponentProps } from "react";
import cx from "classnames";
import Skeleton from "../ui/skeleton";
import usePhotos from "@/hooks/use-photos";

interface AlbumsFilterProps extends ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}

export function AlbumsFilter({
  albums,
  loading,
  className,
  ...props
}: AlbumsFilterProps) {
  const { filters } = usePhotos();
  return (
    <div
      className={cx("flex items-center gap-3.5 overflow-x-auto", className)}
      {...props}
    >
      <Text variant="heading-small">Álbuns</Text>

      <div className="flex gap-3">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={`album-loading-${index}`}
              className="w-24 h-7"
            />
          ))
        ) : (
          <>
            <Button
              variant={filters.albumId === null ? "primary" : "ghost"}
              size="sm"
              className="cursor-pointer"
              onClick={() => filters.setAlbumId(null)}
            >
              Todos
            </Button>

            {albums.map((album) => (
              <Button
                key={album.id}
                variant={filters.albumId === album.id ? "primary" : "ghost"}
                size="sm"
                className="cursor-pointer"
                onClick={() => filters.setAlbumId(album.id)}
              >
                {album.title}
              </Button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}