import { ReactNode } from "react";
import { ButtonStyled } from "./Button.styled";

export type ButtonVariant = "default" | "primary" | "secondary";
export type ButtonProps = {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: ButtonVariant;
};

export default function Button(props: ButtonProps) {
  const { children, leftIcon, rightIcon, variant = "default" } = props;
  return (
    <ButtonStyled $variant={variant}>
      {leftIcon}
      {children}
      {rightIcon}
    </ButtonStyled>
  );
}
