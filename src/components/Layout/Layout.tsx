import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { LayoutBody, LayoutStyled } from "./Layout.styled";

export default function Layout() {
  return (
    <LayoutStyled>
      <Navbar />
      <Sidebar />
      <LayoutBody>
        <Outlet />
      </LayoutBody>
    </LayoutStyled>
  );
}
