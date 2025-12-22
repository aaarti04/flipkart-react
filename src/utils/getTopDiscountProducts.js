import { products } from "../data/products";

export const getTopDiscountProducts = (category, limit = 4) => {
  return products
    .filter(
      p => p.category === category.name
    )
    .sort((a, b) => b.offerPercentage - a.offerPercentage)
    .slice(0, limit);
};
