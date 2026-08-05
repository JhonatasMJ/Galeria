import { useState, type ComponentProps } from "react";
import ImagePreview from "../image-preview";
import { tv } from "tailwind-variants";
import Checkbox from "../ui/checkbox";

export const PhotoSelectableVariants = tv({
  base: "cursor-pointer relative rounded-lg",
  variants: {
    selected: {
      true: "outline-2 outline-accent-brand",
    },
  },
});

interface PhotoSelectableProps extends Omit<
  ComponentProps<typeof ImagePreview>,
  "onSelect"
> {
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
}

export default function PhotoSelectable({
  className,
  selected,
  onSelect,
  ...props
}: PhotoSelectableProps) {
  const [isSelected, setIsSelected] = useState(selected);

  function handleSelect() {
    const newValue = !isSelected;
    setIsSelected(newValue);
    onSelect?.(newValue);
  }
  return (
    <label
      className={PhotoSelectableVariants({ className, selected: isSelected })}
    >
      <Checkbox
        className="absolute top-1 left-1"
        size="sm"
        defaultChecked={isSelected}
        onChange={handleSelect}
      />
      <ImagePreview {...props} className="w-20 h-20 rounded" />
    </label>
  );
}
