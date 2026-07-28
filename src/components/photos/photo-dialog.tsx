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
import type { Album } from "@/types/https/album";
import Skeleton from "../ui/skeleton";
import { useForm } from "react-hook-form";

interface PhotoDialogProps {
  trigger: ReactNode;
}

const albums: Album[] = [
  {
    id: "1",
    title: "Álbum 1",
  },
  {
    id: "2",
    title: "Álbum 2",
  },
];

export default function PhotoDialog({ trigger }: PhotoDialogProps) {
    const form = useForm();
    const isLoading = false;
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Adicionar Foto</DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <InputText maxLength={255} placeholder="Adicione um título" />
          <Alert>
            Tamanho máximo: 50MB <br />
            Você pode selecionar arquivo em PNG, JPG ou JPEG
          </Alert>
          <SingleFile
            form={form}
            allowedExtensions={["png", "jpg", "jpeg"]}
            maxFileSize={50}
            replaceBy={<ImagePreview className="w-full h-56" />}
          />
          <div className="space-y-3">
            <Text variant="label-small">Selecionar álbuns</Text>
            <div className="flex gap-3">
            {!isLoading &&
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
              
              {isLoading && Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={`album-skeleton-${index}`} className="h-7 w-20" />
              ))}
              </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
