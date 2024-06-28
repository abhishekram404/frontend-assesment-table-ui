import IconButton from "../IconButton/IconButton";
import Pill from "../Pill/Pill";
import Text from "../Text/Text";
import { NavbarLeft, NavbarRight, NavbarStyled } from "./Navbar.styled";
import { bellIcon, creditUsageIcon } from "./Navbar.utils";
import { Icon } from "@iconify/react";
export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarLeft>
        <IconButton>
          <Icon icon={"bx:arrow-back"} fontSize={24} color="#606B81" />
        </IconButton>
        <Text size={20} weight={700} color="#1B2D4F">
          Amazon product price
        </Text>
        <IconButton padding="0px">
          <Icon icon={"weui:info-outlined"} fontSize={24} color="#606B81" />
        </IconButton>
      </NavbarLeft>
      <NavbarRight>
        <Pill color="#1B2D4F">
          {creditUsageIcon}
          Credit usage: 1018 / 2000
        </Pill>
        <IconButton>{bellIcon}</IconButton>
      </NavbarRight>
    </NavbarStyled>
  );
}
