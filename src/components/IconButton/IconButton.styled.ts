import styled from "styled-components";
import { IconButtonProps } from "./IconButton";

export const IconButtonStyled = styled.button<IconButtonProps>`
  display: grid;
  place-items: center;
  border: none;
  aspect-ratio: 1;
  cursor: pointer;
  background: ${({ backgroundColor }) => backgroundColor || "transparent"};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "6px"};
  padding: ${({ padding }) => padding || "6px"};
  &:hover {
    background: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
`;
