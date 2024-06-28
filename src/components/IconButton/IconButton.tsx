import { ReactNode } from "react";
import { IconButtonStyled } from "./IconButton.styled";

export type IconButtonProps = {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  children?: ReactNode;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
};

export default function IconButton(props: IconButtonProps) {
  return <IconButtonStyled {...props}>{props.children}</IconButtonStyled>;
}
