import { ReactNode } from "react";
import { SidebarItemStyled } from "./Sidebar.styled";
import Text from "../Text/Text";

export type SidebarItemProps = {
  icon: ReactNode;
  title: string;
  path: string;
};

export const SidebarItem = (props: SidebarItemProps) => {
  const { icon, title, path } = props;
  return (
    <SidebarItemStyled
      to={path}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {icon}
      <Text size={14} weight={500} color={"inherit"}>
        {title}
      </Text>
    </SidebarItemStyled>
  );
};
