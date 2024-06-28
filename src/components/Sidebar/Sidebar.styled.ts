import styled, { css } from "styled-components";

export const SidebarStyled = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e9eaed;
`;

export const SidebarHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e9eaed;
`;

export const SidebarBody = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SidebarItemStyled = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;

  color: ${(props) => (props.isActive ? "#1276FF" : "#1B2D4F")};
  background: ${(props) => (props.isActive ? "#D6E7FF" : "transparent")};

  ${({ isActive }) =>
    !isActive &&
    css`
      &:hover {
        background-color: #f5f6f8;
      }
    `}
`;
