import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #f4f5fc;
  height: calc(100dvh - 60px);
`;

export const TopbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const EditModeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 12px;
`;
