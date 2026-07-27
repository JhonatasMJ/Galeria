import type { Album } from "@/types/https/album";
import type { Photo } from "@/types/https/photo";
import Text from "../ui/text";
import Checkbox from "../ui/checkbox";
import Divider from "../ui/divider";
import Skeleton from "../ui/skeleton";

interface AlbumsSelectableProps {
  loading?: boolean;
  albums: Album[];
  photo: Photo;
}

export default function AlbumsSelectable({
  loading,
  albums,
  photo,
}: AlbumsSelectableProps) {
  function isChecked(albumId: string) {
    return photo?.albums?.some((album) => album.id === albumId);
  }
  // Aqui vamos verificar se o álbum já está na lista de álbuns da foto e se está, vamos remover o álbum da lista, se não está, vamos adicionar o álbum à lista
  function handlePhotoOnAlbums(albumId: string) {
    let albumsIds = [];
    if (isChecked(albumId)) {
      albumsIds = photo.albums
        .filter((album) => album.id !== albumId)
        .map((album) => album.id);
    } else {
      albumsIds = [...photo.albums.map((album) => album.id), albumId];
    }
    console.log(albumsIds);
  }
  return (
    <ul className="flex flex-col gap-4">
      {!loading &&
        albums.length > 0 &&
        albums.map((album, index) => (
          <li key={album.id}>
            <div className="flex items-center justify-between gap-1">
              <Text className="truncate">{album.title}</Text>
              <Checkbox
                defaultChecked={isChecked(album.id)}
                onClick={() => handlePhotoOnAlbums(album.id)}
              />
            </div>
            {index !== albums.length - 1 && <Divider className="mt-4" />}
          </li>
        ))}
      {loading &&
        Array.from({ length: 5 }).map((_, index) => (
          <li key={`albums-list-skeleton-${index}`}>
            <Skeleton className="h-[2.5rem]" />
          </li>
        ))}
    </ul>
  );
}
