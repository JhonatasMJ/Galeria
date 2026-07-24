import type { ComponentProps } from "react";
import Container from "@/components/ui/container";
import Logo from "@/assets/images/galeria-plus-full-logo.svg?react";
import { Link } from "react-router-dom";
import cx from "classnames";
import Button from "./button";
import PhotoSearch from "./photo-search";
import Divider from "./ui/divider";

interface HeaderProps extends ComponentProps<"div"> {}

export default function Header({ className, ...props }: HeaderProps) {
  return (
    <Container
      as="header"
      className={cx("flex items-center justify-between gap-10 mt-9", className)}
      {...props}
    >
      <Link to="/">
        <Logo className="h-5" />
      </Link>
      <PhotoSearch />
      <Divider orientation="vertical" className="h-10" />
      <div className="flex items-center gap-3">
        <Button>Nova Foto</Button>
        <Button variant="secondary">Criar Albúm</Button>
      </div>
    </Container>
  );
}
