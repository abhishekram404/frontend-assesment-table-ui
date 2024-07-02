import { Product } from "../types/Product.type";
import { generateRating } from "./generateRating";

export const addFakeRatingToProduct = (product: Product) => ({
  ...product,
  rating: generateRating(),
});
