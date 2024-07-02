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
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    children,
    hoverBackgroundColor,
    padding,
  } = props;

  return (
    <IconButtonStyled
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $hoverBackgroundColor={hoverBackgroundColor}
      $padding={padding}
    >
      {children}
    </IconButtonStyled>
  );
}
