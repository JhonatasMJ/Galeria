import InputText from "./components/input-text-";
import SearchIcon from "./assets/icons/search.svg?react";
import Checkbox from "./components/checkbox";

export default function App() {
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
    </div>
  );
}
