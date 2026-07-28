import type { ReactNode } from "react";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../dialog";
import Button from "../button";
import InputText from "../input-text-";
import Text from "../ui/text";
import type { Photo } from "@/types/https/photo";
import ImageEmpty from "@/assets/images/select-checkbox.svg?react";
import Skeleton from "../ui/skeleton";
import ImagePreview from "../image-preview";

interface AlbumsDialogProps {
  trigger: ReactNode;
}

export default function AlbumsDialog({ trigger }: AlbumsDialogProps) {
  const photos: Photo[] = [
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
  ];
  const isLoading = false;
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Criar Álbum</DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <InputText maxLength={255} placeholder="Adicione um título" />
          <div className="space-y-3">
            <Text as="div" variant="label-small">
              Fotos cadastradas
            </Text>
            {!isLoading && photos.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                  <ImagePreview className="w-20 h-20 rounded" src={`/images/${photo.imageId}`} alt={photo.title} />
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex flex-wrap gap-2">
                {" "}
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton
                    key={`photo-skeleton-${index}`}
                    className="w-20 h-20"
                  />
                ))}
              </div>
            )}
            {!isLoading && photos.length === 0 && (
              <div className="w-full flex flex-col justify-center items-center gap-3">
                <ImageEmpty />
                <Text variant="paragraph-medium" className="text-center">
                  Nenhuma foto disponível para seleção
                </Text>
              </div>
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
