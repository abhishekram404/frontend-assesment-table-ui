import styled from "styled-components";

type TextStyledProps = {
  $weight?: number;
  $size?: number;
  $color?: string;
  $align?: "left" | "center" | "right";
};

export const TextStyled = styled.p<TextStyledProps>`
  font-weight: ${(props) => props.$weight ?? 400};
  font-size: ${(props) => props.$size ?? 14}px;
  color: ${(props) => props.$color ?? "#000000"};
  text-align: ${(props) => props.$align ?? "left"};
`;
