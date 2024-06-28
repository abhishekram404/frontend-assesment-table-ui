import Pill from "../Pill/Pill";
import Text from "../Text/Text";
import { NavbarLeft, NavbarRight, NavbarStyled } from "./Navbar.styled";
import { creditUsageIcon } from "./Navbar.utils";

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarLeft>
        <Text size={20} weight={700} color="#1B2D4F">
          Amazone product price
        </Text>
      </NavbarLeft>
      <NavbarRight>
        <Pill color="#1B2D4F">
            {creditUsageIcon}
            Credit usage: 1018 / 2000</Pill>
      </NavbarRight>
    </NavbarStyled>
  );
}
