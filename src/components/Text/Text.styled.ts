import styled from "styled-components";
import { TextProps } from "./Text";

export const TextStyled = styled.p<Partial<TextProps>>`
  font-weight: ${(props) => props.weight ?? 400};
  font-size: ${(props) => props.size ?? 14}px;
  color: ${(props) => props.color ?? "#000000"};
  text-align: ${(props) => props.align ?? "left"};
`;
