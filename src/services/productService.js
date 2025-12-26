// src/services/productService.js
import { categories } from "../data/categories";
import { productsByCategory } from "../data/products";

// ⛔ No fetch, but same API-like behavior
export const fetchCategories = async () => {
  return Promise.resolve(categories);
};

export const fetchProductsByCategory = async (slug) => {
  return Promise.resolve(productsByCategory[slug] || []);
};

export const getTopOfferProducts = (products) => {
  return [...products]
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 4);
};

export const fetchProductById = async (id) => {
  const allProducts = Object.values(productsByCategory).flat();
  const product = allProducts.find(p => String(p.id) === String(id));
  return product || null;
};

