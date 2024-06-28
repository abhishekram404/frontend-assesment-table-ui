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
    isActive: true,
  },
  {
    title: "Workflows",
    icon: workflowsIcon,
  },
  {
    title: "Credit usage",
    icon: creditUsageIcon,
  },
];

export const SidebarItem = ({
  icon,
  title,
  isActive,
}: {
  icon: ReactNode;
  title: string;
  isActive?: boolean;
}) => {
  return (
    <SidebarItemStyled isActive={isActive}>
      {icon}
      <Text size={14} weight={500} color={isActive ? "#1276FF" : "#1B2D4F"}>
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
