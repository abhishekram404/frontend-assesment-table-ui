import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarStyled = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e9eaed;
`;

export const SidebarHeader = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #e9eaed;
`;

export const SidebarBody = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const SidebarItemStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;
  background: transparent;
  text-decoration: none;
  color: #1b2d4f;

  &:hover {
    background-color: #f5f6f8;
  }

  &.active {
    color: #1276ff;
    background: #d6e7ff;

    &:hover {
      background: #d6e7ff;
    }
  }
`;

export const SidebarFooter = styled.div`
  border-radius: 6px;
  opacity: 0.8;
  background: #f4f5fc;
  padding: 16px;
  margin-top: auto;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;
