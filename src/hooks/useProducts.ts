import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../pages/Datasets/Datasets.utils";
import { Product } from "../shared/types/Product.type";
import { addFakeRatingToProduct } from "../shared/utils/addFakeRatingToProduct";

const addRating = (data: Product[]) => data.map(addFakeRatingToProduct);

export default function useProducts() {
  const response = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 60,
    select: addRating,
  });

  return {
    products: response.data || [],
    ...response,
  };
}
