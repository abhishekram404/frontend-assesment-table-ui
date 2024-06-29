import styled from "styled-components";
import Button from "../components/Button/Button";
import { Icon } from "@iconify/react";
import IconButton from "../components/IconButton/IconButton";
export default function Datasets() {
  return (
    <Root>
      <Topbar>
        <TopbarLeft>
          <Button variant="primary">Operations</Button>
          <Button
            leftIcon={<Icon icon={"bi:filter"} color="#1B2D4F" fontSize={20} />}
          >
            Add filters
          </Button>
        </TopbarLeft>
        <TopbarRight>
          <Button
            leftIcon={
              <Icon
                icon={"basil:eye-closed-outline"}
                color="#1B2D4F"
                fontSize={20}
              />
            }
          >
            Show metadata
          </Button>
          <IconButton backgroundColor="#FFFFFF" borderColor="#E9EAED">
            <Icon
              icon={"solar:download-linear"}
              color="#1276FF"
              fontSize={20}
            />
          </IconButton>
        </TopbarRight>
      </Topbar>
    </Root>
  );
}

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #f4f5fc;
  height: 100%;
`;

export const Topbar = styled.div`
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
