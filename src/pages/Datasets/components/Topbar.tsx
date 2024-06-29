import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../../components/Button/Button";
import IconButton from "../../../components/IconButton/IconButton";
import Switch from "../../../components/Switch/Switch";
import Text from "../../../components/Text/Text";
import {
    EditModeContainer,
    TopbarLeft,
    TopbarRight,
    TopbarStyled,
} from "../Datasets.styled";

export default function Topbar() {
  return (
    <TopbarStyled>
      <TopbarLeft>
        <Button variant="primary">Operations</Button>
        <Button
          leftIcon={<Icon icon={"bi:filter"} color="#1B2D4F" fontSize={20} />}
        >
          Add filters
        </Button>
      </TopbarLeft>
      <TopbarRight>
        <EditModeContainer>
          <Text color="#1B2D4F" size={14} weight={500}>
            Edit mode
          </Text>
          <Switch />
        </EditModeContainer>
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
          <Icon icon={"solar:download-linear"} color="#1276FF" fontSize={20} />
        </IconButton>
      </TopbarRight>
    </TopbarStyled>
  );
}
