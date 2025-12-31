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

export const getAllProducts = () => {
  return Object.values(productsByCategory).flat();
}

export const searchProducts = async (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const allProducts = Object.values(productsByCategory).flat();

  const results = allProducts.filter(product =>
    product.title?.toLowerCase().includes(q) ||
    product.description?.toLowerCase().includes(q) ||
    product.brand?.toLowerCase().includes(q) ||
    product.category?.toLowerCase().includes(q) ||
    product.tags?.some(tag => tag.toLowerCase().includes(q))
  );

  return Promise.resolve(results);
};