import { useForm } from "react-hook-form";
import InputText from "@/components/input-text-";
import Checkbox from "@/components/ui/checkbox";
import SingleFile from "@/components/single-file";
import ImageFilePreview from "@/components/image-file-preview";
import { Dialog, DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/dialog";
import Button from "@/components/button";
import Text from "@/components/ui/text";
import SearchIcon from "@/assets/icons/search.svg?react";

export default function PageComponents() {
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