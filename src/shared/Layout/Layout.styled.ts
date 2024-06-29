import styled from "styled-components";

export const LayoutStyled = styled.div`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 212px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
`;

export const LayoutBody = styled.div`
  grid-area: main;
`;
