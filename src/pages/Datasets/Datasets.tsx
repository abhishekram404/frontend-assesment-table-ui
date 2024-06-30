import Table from "../../components/Table/Table";
import useProducts from "../../hooks/useProducts";
import Topbar from "./components/Topbar";
import { Root } from "./Datasets.styled";
import { columns } from "./Datasets.utils";

export default function Datasets() {
  const { products } = useProducts();
  return (
    <Root>
      <Topbar />
      <Table columns={columns} items={products} />
    </Root>
  );
}
