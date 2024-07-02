import { ReactNode } from "react";
import { TextStyled } from "./Text.styled";

export type TextProps = {
  children?: ReactNode | string;
  weight?: number;
  size?: number;
  color?: string;
  align?: "left" | "center" | "right";
  isHeading?: boolean;
  headingLevel?: number;
};

export default function Text(props: TextProps) {
  const {
    children,
    isHeading,
    headingLevel = 1,
    align,
    color,
    size,
    weight,
  } = props;

  const underlyingElement = isHeading ? `h${headingLevel}` : "p";

  return (
    <TextStyled
      as={underlyingElement}
      $align={align}
      $color={color}
      $size={size}
      $weight={weight}
    >
      {children}
    </TextStyled>
  );
}
