import { ReactNode } from "react";
import { LayoutStyled } from "./Layout.styled";

type LayoutProps = {
  header: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
};

export default function Layout(props: LayoutProps) {
  const { header, sidebar, children } = props;
  return (
    <LayoutStyled>
      {header}
      {sidebar}
      {children}
    </LayoutStyled>
  );
}
