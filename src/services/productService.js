export const fetchCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  return await res.json();
};
