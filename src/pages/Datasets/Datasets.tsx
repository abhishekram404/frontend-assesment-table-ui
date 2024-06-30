import { useQuery } from "@tanstack/react-query";
import Table, { TableColumn } from "../../components/Table/Table";
import Topbar from "./components/Topbar";
import { Root } from "./Datasets.styled";
import Pill from "../../components/Pill/Pill";

const columns: TableColumn[] = [
  { name: "Product name", accessor: "name" },
  {
    name: "Price",
    accessor: "price",
    prefix: "$",
    formatter: (value) => parseInt(value as string),
  },
  { name: "Rating", accessor: "rating" },
  { name: "Brand", accessor: "brand" },
  {
    name: "Availability",
    accessor: "isAvailable",
    formatter: (value) =>
      value ? (
        <Pill backgroundColor="#28a745" color="#ffffff">
          Available
        </Pill>
      ) : (
        <Pill backgroundColor="#dc3545" color="#ffffff">
          Out of stock
        </Pill>
      ),
  },
];

export default function Datasets() {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(
        "https://667e8a33f2cb59c38dc61920.mockapi.io/products"
      );
      return response.json();
    },
  });
  return (
    <Root>
      <Topbar />
      <Table columns={columns} items={products} />
    </Root>
  );
}
