import styled from "styled-components";
import { ButtonVariant } from "./Button";
import {
  backgroundColorHoverMap,
  backgroundColorMap,
  borderColorMap,
  colorMap,
} from "./Button.utils";

export const ButtonStyled = styled.button<{ $variant?: ButtonVariant }>`
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ $variant }) => colorMap[$variant as ButtonVariant]};
  background: ${({ $variant }) =>
    backgroundColorMap[$variant as ButtonVariant]};
  border: 1px solid
    ${({ $variant }) => borderColorMap[$variant as ButtonVariant]};

  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    background: ${({ $variant }) =>
      backgroundColorHoverMap[$variant as ButtonVariant]};
  }
`;
