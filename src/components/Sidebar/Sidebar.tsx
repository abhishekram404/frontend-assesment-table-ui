import Button from "../Button/Button";
import Text from "../Text/Text";
import {
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarStyled,
} from "./Sidebar.styled";
import { sidebarItems } from "./Sidebar.utils";
import { SidebarItem } from "./SidebarItem";

export default function Sidebar() {
  return (
    <SidebarStyled>
      <SidebarHeader>
        <Text isHeading size={20} weight={700} color="#1B2D4F">
          Grepsr
        </Text>
      </SidebarHeader>
      <SidebarBody>
        {sidebarItems.map((item) => (
          <SidebarItem key={item.title} {...item} />
        ))}
        <SidebarFooter>
          <Text align="center" size={12} weight={500} color="#1B2D4F">
            Need any help?
          </Text>
          <Button variant="secondary">Contact Support</Button>
        </SidebarFooter>
      </SidebarBody>
    </SidebarStyled>
  );
}
