import { createElement, ReactNode } from "react";
import { getStyledElement } from "./Text.styled";

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
  const { children, isHeading, headingLevel = 1, ...styledProps } = props;

  return createElement(
    getStyledElement({ isHeading, headingLevel }),
    styledProps,
    children
  );
}
