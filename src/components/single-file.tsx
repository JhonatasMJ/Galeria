/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, type ComponentProps, type ReactNode } from "react";
import { useWatch } from "react-hook-form";
import { type VariantProps, tv } from "tailwind-variants";

import Icon from "@/components/ui/icon";
import Text, { textVariants } from "@/components/ui/text";

import FileIcon from "@/assets/icons/upload-file.svg?react";
import FileImageIcon from "@/assets/icons/image.svg?react";

export const singleFilerVariants = tv({
  base: "flex flex-col items-center justify-center w-full group-hover:border-border-active border border-solid border-border-primary rounded-lg px-5 py-6 transition gap-1",
  variants: {
    error: {
      true: "border-accent-red group-hover:border-accent-red",
    },
  },
});

interface SingleFileProps
  extends
    Omit<VariantProps<typeof singleFilerVariants>, "error">,
    Omit<ComponentProps<"input">, "type"> {
  allowedExtensions: string[];
  maxFileSize: number;
  form: any;
  replaceBy: ReactNode;
  error?: ReactNode;
}

export default function SingleFile({
  className,
  error,
  form,
  allowedExtensions,
  maxFileSize,
  replaceBy,
  ...props
}: SingleFileProps) {
  const formValue = useWatch({
    control: form.control,
  });

  const name = props.name || "";

  // Verifica se tem um arquivo selecionado
  const formFile: File = useMemo(() => formValue[name]?.[0], [formValue, name]);

  const { fileExtension, fileSize } = useMemo(
    () => ({
      fileExtension: formFile?.name.split(".").pop()?.toLocaleLowerCase() || "",
      fileSize: formFile?.size || 0,
    }),
    [formFile],
  );

  // Verifica se o arquivo tem a extensão permitida
  function isValidExtension() {
    return allowedExtensions.includes(fileExtension);
  }

  // Verifica se o arquivo tem o tamanho permitido
  function isValidSize() {
    return fileSize <= maxFileSize * 1024 * 1024;
  }

  // Verifica se o arquivo é válido
  function isValidFile() {
    return isValidExtension() && isValidSize();
  }

  const hasError =
    !!error || (!!formFile && (!isValidExtension() || !isValidSize()));

  return (
    <div className="w-full relative group cursor-pointer">
      {!formFile || !isValidFile() ? (
        <>
          <input
            {...props}
            type="file"
            className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer"
          />

          <div className={singleFilerVariants({ className, error: hasError })}>
            <Icon svg={FileIcon} className="w-8 h-8 fill-placeholder" />

            <Text variant="label-medium" className="text-placeholder">
              Arraste o arquivo aqui
              <br />
              ou clique para selecionar
            </Text>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            {formFile && !isValidExtension() && (
              <Text variant="label-small" className="text-accent-red">
                Tipo de arquivo inválido
              </Text>
            )}
            {formFile && !isValidSize() && (
              <Text variant="label-small" className="text-accent-red">
                Tamanho do arquivo ultrapassa o máximo
              </Text>
            )}
            {error && (
              <Text variant="label-small" className="text-accent-red">
                {error}
              </Text>
            )}
          </div>
        </>
      ) : (
        <>
      <div>{replaceBy}</div>
        <div className="flex gap-3 items-center border border-solid border-border-primary mt-5 p-3 rounded">
          <Icon svg={FileImageIcon} className="w-6 h-6 fill-white" />

          <div className="flex flex-col">
            <div className="truncate max-w-80">
              <Text variant="label-medium" className="text-placeholder">
                {formFile.name}
              </Text>
            </div>

            <div className="flex">
              <button
                onClick={() => form.setValue(name, undefined)}
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
        </>
      )}
    </div>
  );
}
