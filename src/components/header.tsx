import type { ComponentProps } from "react";
import Container from "@/components/ui/container";
import Logo from "@/assets/images/galeria-plus-full-logo.svg?react";

interface HeaderProps extends ComponentProps<"div"> {}

export default function Header({ className, ...props }: HeaderProps) {
  return (
    <Container>
      <Logo />
    </Container>
  );
}
