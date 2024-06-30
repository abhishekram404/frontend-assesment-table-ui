import Table from "../../components/Table/Table";
import Topbar from "./components/Topbar";
import { Root } from "./Datasets.styled";
export default function Datasets() {
  return (
    <Root>
      <Topbar />
      <Table />
    </Root>
  );
}
