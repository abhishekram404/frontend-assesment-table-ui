import styled from "styled-components";
import { ButtonVariant } from "./Button";

export const ButtonStyled = styled.button<{ variant?: ButtonVariant }>`
  border-radius: 6px;
  border: 1px solid #e9eaed;
  background: ${({ variant }) =>
    variant === "primary" ? "#1276FF" : "#ffffff"};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ variant }) => (variant === "primary" ? "#ffffff" : " #1b2d4f")};

  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    background: ${({ variant }) =>
      variant === "primary" ? "#0f65e7" : "#f5f6f8"};
  }
`;
