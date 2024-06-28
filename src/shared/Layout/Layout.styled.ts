import styled from "styled-components";

export const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 212px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
`;
