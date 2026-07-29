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
import Text from "../ui/text";

interface PhotoDeleteDialogProps {
  trigger: ReactNode;
}

export default function PhotoDeleteDialog({ trigger }: PhotoDeleteDialogProps) {

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Excluir Foto</DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <Text as="div" variant="paragraph-medium">
            Deseja realmente excluir a foto? Essa ação não pode ser desfeita.
          </Text>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button variant="destructive">Deletar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
