export const getTopDiscountProducts = (products, limit = 4) => {
  return [...products]
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, limit);
};
