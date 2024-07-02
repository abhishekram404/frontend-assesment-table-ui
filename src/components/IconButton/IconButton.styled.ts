import styled from "styled-components";

type IconButtonStyledProps = Partial<{
  $backgroundColor: string;
  $borderColor: string;
  $borderRadius: string;
  $padding: string;
  $hoverBackgroundColor: string;
}>;

export const IconButtonStyled = styled.button<IconButtonStyledProps>`
  display: grid;
  place-items: center;
  border: none;
  aspect-ratio: 1;
  cursor: pointer;
  background: ${({ $backgroundColor }) => $backgroundColor || "transparent"};
  border: ${({ $borderColor }) =>
    $borderColor ? `1px solid ${$borderColor}` : "none"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "6px"};
  padding: ${({ $padding }) => $padding || "6px"};
  &:hover {
    background: ${({ $hoverBackgroundColor }) => $hoverBackgroundColor};
  }
`;
