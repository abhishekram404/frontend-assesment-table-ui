import Table from "../../components/Table/Table";
import Topbar from "./components/Topbar";
import { Root } from "./Datasets.styled";

const columns = [
  { name: "Product name", accessor: "name" },
  { name: "Price", accessor: "price", prefix: "$" },
  { name: "Rating", accessor: "rating" },
  { name: "Brand", accessor: "brand" },
  { name: "Availability", accessor: "isAvailable" },
];

const items = Array(100).fill({
  name: "Product 1",
  price: 100,
  rating: 4.5,
  brand: "Brand 1",
  isAvailable: "Available",
});

export default function Datasets() {
  return (
    <Root>
      <Topbar />
      <Table columns={columns} items={items} />
    </Root>
  );
}
