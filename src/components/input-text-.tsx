import { type VariantProps, tv } from "tailwind-variants";
import Icon from "@/components/ui/icon";
import Text from "@/components/ui/text";
import type { ComponentProps, ReactNode } from "react";

export const inputTextContainerVariants = tv({
  base: "flex flex-col gap-1",
});

export const inputTextWrapperVariants = tv({
  base: "border border-solid border-border-primary focus:border-border-active bg-transparent rounded flex items-center gap-3 p-2",

  variants: {
    size: {
      md: "h-10 p-3",
    },
    disable: {
      true: "pointer-events-none",
    },
    defaultVariants: {
      size: "md",
      disable: false,
    },
  },
});

export const inputTextVariants = tv({
  base: "bg-transparent outline-none placeholder:text-placeholder text-accent-paragraph flex-1",
});

export const inputTextIconVariants = tv({
  base: "fill-placeholder",
  variants: {
    size: {
      md: "w-6 h-6",
    },
    defaultVariants: {
      size: "md",
    },
  },
});

//Pega as propriedades do input e remove as propriedades de size e disabled
interface InputTextProps
  extends
    VariantProps<typeof inputTextWrapperVariants>,
    Omit<ComponentProps<"input">, "size" | "disabled"> {
  icon?: ComponentProps<typeof Icon>["svg"];
  error?: ReactNode;
}

//Passo a estilização para o componente e a variação
export default function InputText({
  className,
  icon,
  error,
  size,
  disable,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextContainerVariants({ className })}>
      <div className={inputTextWrapperVariants({ size, disable })}>
        {icon && (
          <Icon svg={icon} className={inputTextIconVariants({ size })} />
        )}
        <input
          {...props}
          className={inputTextVariants()}
          disabled={disable as boolean}
        />
      </div>
      {error && (
        <Text variant="label-small" className="text-accent-red">
          {error}
        </Text>
      )}
    </div>
  );
}
