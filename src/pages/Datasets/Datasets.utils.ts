import { TableColumn } from "../../components/Table/Table";
import { availabilityFormatter } from "./components/AvailabilityPill";

export const fetchProducts = async () => {
  const response = await fetch(
    "https://667e8a33f2cb59c38dc61920.mockapi.io/products"
  );
  return response.json();
};

export const columns: TableColumn[] = [
  { name: "Product name", accessor: "name" },
  {
    name: "Price",
    accessor: "price",
    prefix: "$",
    formatter: (value) => parseInt(value as string),
  },
  { name: "Rating", accessor: "rating" },
  {
    name: "Brand",
    accessor: "brand",
  },
  {
    name: "Availability",
    accessor: "isAvailable",
    formatter: (value) => availabilityFormatter(value as boolean),
  },
];
