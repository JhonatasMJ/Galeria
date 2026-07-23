import InputText from "./components/input-text-";
import SearchIcon from "./assets/icons/search.svg?react";
import Checkbox from "./components/checkbox";
import SingleFile from "./components/single-file";
import { useForm } from "react-hook-form";
import ImageFilePreview from "./components/image-file-preview";
import Button from "./components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./components/dialog";
import Text from "./components/text";

export default function App() {
  const form = useForm();
  const file = form.watch("file");
  // Cria uma URL temporária para o arquivo
  const fileSrc = file?.[0] ? URL.createObjectURL(file[0]) : undefined;
  return (
    <div className="grid gap-7 p-6">
      <div>
        <InputText
          error="Erro do campo"
          icon={SearchIcon}
          placeholder="Digite seu nome"
        />
      </div>
      <div>
        <Checkbox />
      </div>
      <div>
        <SingleFile
          replaceBy={<ImageFilePreview src={fileSrc} />}
          allowedExtensions={["jpg", "png", "jpeg", "webp"]}
          maxFileSize={50}
          form={form}
          {...form.register("file")}
        />
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Abrir Modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Modal Teste</DialogHeader>
            <DialogBody>
              <Text>Conteúdo do modal</Text>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Cancelar</Button>
              </DialogClose>
              <Button>Confirmar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
