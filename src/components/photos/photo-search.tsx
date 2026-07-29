import { useEffect, useState } from "react";
import InputText from "@/components/input-text-";
import SearchIcon from "@/assets/icons/search.svg?react";
import usePhotos from "@/hooks/use-photos";

export default function PhotoSearch() {
  const [search, setSearch] = useState("");
  const { filters } = usePhotos();

  // Jeito simples de fazer o debounce, crio um timer e cancelo ele quando o componente for desmontado
  useEffect(() => {
    const timer = setTimeout(() => {
      filters.setQ(search);
    }, 200);

    return () => clearTimeout(timer);
  }, [search, filters.setQ]);

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