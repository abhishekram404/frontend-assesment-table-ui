import Text from "../Text/Text";
import { SidebarBody, SidebarHeader, SidebarStyled } from "./Sidebar.styled";
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
      </SidebarBody>
    </SidebarStyled>
  );
}
