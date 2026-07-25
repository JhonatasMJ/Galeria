import { useEffect, useState } from "react";
import InputText from "@/components/input-text-";
import SearchIcon from "@/assets/icons/search.svg?react";

export default function PhotoSearch() {
  const [search, setSearch] = useState("");

  // Jeito simples de fazer o debounce, crio um timer e cancelo ele quando o componente for desmontado
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Buscar:", search);
    }, 200);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <InputText
      className="flex-1"
      placeholder="Buscar fotos"
      icon={SearchIcon}
      error={null}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}