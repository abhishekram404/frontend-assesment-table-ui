import { ReactNode } from "react";
import Text from "../Text/Text";
import {
  SidebarBody,
  SidebarHeader,
  SidebarItemStyled,
  SidebarStyled,
} from "./Sidebar.styled";
import { creditUsageIcon, datasetIcon, workflowsIcon } from "./Sidebar.utils";

const sidebarItems = [
  {
    title: "Datasets",
    icon: datasetIcon,
    path: "/",
  },
  {
    title: "Workflows",
    icon: workflowsIcon,
    path: "/workflows",
  },
  {
    title: "Credit usage",
    icon: creditUsageIcon,
    path: "/credit-usage",
  },
];

export const SidebarItem = ({
  icon,
  title,
  path,
}: {
  icon: ReactNode;
  title: string;
  path: string;
}) => {
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
          <SidebarItem {...item} />
        ))}
      </SidebarBody>
    </SidebarStyled>
  );
}
