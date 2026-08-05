import { useEffect, useState, type ReactNode } from "react";
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
import ImageEmpty from "@/assets/images/select-checkbox.svg?react";
import Skeleton from "../ui/skeleton";
import PhotoSelectable from "../photos/photo-selectable";
import usePhotos from "@/hooks/use-photos";
import { useForm } from "react-hook-form";
import {
  createAlbumSchema,
  type CreateAlbumSchema,
} from "@/schemas/createAlbum";
import { zodResolver } from "@hookform/resolvers/zod";

interface AlbumsDialogProps {
  trigger: ReactNode;
}

export default function AlbumsDialog({ trigger }: AlbumsDialogProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { photos, isLoadingPhotos } = usePhotos();

  const form = useForm<CreateAlbumSchema>({
    resolver: zodResolver(createAlbumSchema),
  });

  useEffect(() => {
    if (!modalOpen) {
      form.reset();
    }
  }, [modalOpen, form]);

  function handleTogglePhoto(selected: boolean, photoId: string) {
    if (selected) {
      const photosIds = form.getValues("photosIds");
      const photosSet = new Set(photosIds || []);
      photosSet.add(photoId);
      form.setValue("photosIds", Array.from(photosSet));
    }
  }
  function handleSubmit(payload: CreateAlbumSchema) {
    console.log(payload);
  }
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>Criar Álbum</DialogHeader>
          <DialogBody className="flex flex-col gap-5">
            <InputText
              error={form.formState.errors.title?.message}
              {...form.register("title")}
              maxLength={255}
              placeholder="Adicione um título"
            />
            <div className="space-y-3">
              <Text as="div" variant="label-small">
                Fotos cadastradas
              </Text>
              {!isLoadingPhotos && photos.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {photos.map((photo) => (
                    <PhotoSelectable
                      className="w-20 h-20 rounded"
                      src={`${import.meta.env.VITE_API_URL}/images/${photo.imageId}`}
                      alt={photo.title}
                      onSelect={(selected) =>
                        handleTogglePhoto(selected, photo.id)
                      }
                    />
                  ))}
                </div>
              )}

              {isLoadingPhotos && (
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
              {!isLoadingPhotos && photos.length === 0 && (
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
            <Button type="submit">Criar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
