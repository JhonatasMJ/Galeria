import InputText from "./components/input-text-";
import SearchIcon from "./assets/icons/search.svg?react";
import Checkbox from "./components/checkbox";
import SingleFile from "./components/single-file";
import { useForm } from "react-hook-form";

export default function App() {
  const form = useForm();
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
          allowedExtensions={["jpg", "png", "jpeg", "webp"]}
          maxFileSize={50}
          form={form}
          {...form.register("file")}
        />
      </div>
    </div>
  );
}
