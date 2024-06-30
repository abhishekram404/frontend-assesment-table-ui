import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../pages/Datasets/Datasets.utils";

export default function useProducts() {
  const response = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 60,
  });

  return {
    products: response.data || [],
    ...response,
  };
}
