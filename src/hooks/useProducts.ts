import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../pages/Datasets/Datasets.utils";

export default function useProducts() {
  const response = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return {
    products: response.data,
    ...response,
  };
}
