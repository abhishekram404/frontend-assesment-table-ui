import styled from "styled-components";
import Loader from "../Loader/Loader";

export default function LoadingScreen() {
  return (
    <Root>
      <Loader />
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
`;
