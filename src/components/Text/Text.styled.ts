import styled from "styled-components";
import { TextProps } from "./Text";

export const getStyledElement = (
  props: Pick<TextProps, "isHeading" | "headingLevel">
) => {
  const { isHeading, headingLevel } = props;

  return styled(isHeading ? `h${headingLevel}` : "p")<Partial<TextProps>>`
    font-weight: ${(props) => props.weight ?? 400};
    font-size: ${(props) => props.size ?? 14}px;
    color: ${(props) => props.color ?? "#000000"};
    text-align: ${(props) => props.align ?? "left"};
  `;
};
