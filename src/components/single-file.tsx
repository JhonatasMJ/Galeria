import { type VariantProps, tv } from "tailwind-variants";
import Text, { textVariants } from "./text";
import Icon from "./icon";
import FileIcon from "../assets/icons/upload-file.svg?react";
import FileImageIcon from "../assets/icons/image.svg?react";
import type { ComponentProps, ReactNode } from "react";

export const singleFilerVariants = tv({
  base: "flex flex-col items-center justify-center w-full group-hover:border-border-active border border-solid border-border-primary rounded-lg px-5 py-6 transition gap-1",
});

interface SingleFileProps
  extends
    VariantProps<typeof singleFilerVariants>,
    Omit<ComponentProps<"input">, "type"> {
  error?: ReactNode;
}

export default function SingleFile({
  className,
  error,
  ...props
}: SingleFileProps) {
  return (
    <div className="w-full relative group cursor-pointer">
      <div className={singleFilerVariants({ className })}>
        <input
          {...props}
          type="file"
          className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className={singleFilerVariants()}>
          <Icon svg={FileIcon} className="w-8 h-8 fill-placeholder" />
          <Text variant="label-medium" className="text-placeholder">
            Arraste o arquivo aqui <br /> ou clique para selecionar
          </Text>
        </div>
      </div>
      {error && (
        <Text variant="label-small" className="text-accent-red">
          {error}
        </Text>
      )}
      <div className="flex gap-3 items-center border border-solid border-border-primary mt-5 p-3 rounded">
        <Icon svg={FileImageIcon} className="w-6 h-6 fill-white" />
        <div className="flex flex-col">
          <div className="truncate max-w-80">
            <Text variant="label-medium" className="text-placeholder">
              Nome do arquivo.png
            </Text>
          </div>
          <div className="flex">
            <button
              type="button"
              className={textVariants({
                variant: "label-small",
                className: "text-accent-red cursor-pointer hover:underline",
              })}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
