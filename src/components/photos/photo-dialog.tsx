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
import Alert from "../ui/alert";
import SingleFile from "../single-file";
import ImagePreview from "../image-preview";
import Text from "../ui/text";
import Skeleton from "../ui/skeleton";
import { useForm } from "react-hook-form";
import useAlbums from "@/hooks/use-albums";
import {
  createPhotoSchema,
  type CreatePhotoSchema,
} from "@/schemas/createPhoto";
import { zodResolver } from "@hookform/resolvers/zod";
import { fileUrl } from "@/helpers/fileUrl";
interface PhotoDialogProps {
  trigger: ReactNode;
}

export default function PhotoDialog({ trigger }: PhotoDialogProps) {
  const form = useForm<CreatePhotoSchema>({
    resolver: zodResolver(createPhotoSchema),
  });

  function handleSubmit(payload: CreatePhotoSchema) {
    console.log(payload);
  }

  const { albums, isLoadingAlbums } = useAlbums();
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>Adicionar Foto</DialogHeader>
          <DialogBody className="flex flex-col gap-5">
            <InputText
              error={form.formState.errors.title?.message}
              {...form.register("title")}
              maxLength={255}
              placeholder="Adicione um título"
            />
            <Alert>
              Tamanho máximo: 50MB <br />
              Você pode selecionar arquivo em PNG, JPG ou JPEG
            </Alert>
            <SingleFile
              error={form.formState.errors.file?.message}
              form={form}
              {...form.register("file")}
              allowedExtensions={["png", "jpg", "jpeg"]}
              maxFileSize={50}
              replaceBy={<ImagePreview src={fileUrl(form.watch("file"))} className="w-full h-56" />}
            />
            <div className="space-y-3">
              <Text as="div" variant="label-small">
                Selecionar álbuns
              </Text>
              <div className="flex gap-3">
                {!isLoadingAlbums &&
                  albums.length > 0 &&
                  albums.map((album) => (
                    <Button
                      variant="ghost"
                      key={album.id}
                      size="sm"
                      className="truncate"
                    >
                      {album.title}
                    </Button>
                  ))}

                {isLoadingAlbums &&
                  Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton
                      key={`album-skeleton-${index}`}
                      className="h-7 w-20"
                    />
                  ))}
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
