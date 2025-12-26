import { useEffect, useState } from "react";
import CategorySection from "./CategorySection";
import {
  fetchCategories,
  fetchProductsByCategory,
  getTopOfferProducts,
} from "../services/productService";

export default function CategoriesWrapper() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const categories = await fetchCategories();

      const result = [];

      for (let cat of categories) {
        const products = await fetchProductsByCategory(cat);
        const top4 = getTopOfferProducts(products);

        result.push({
          category: cat,
          products: top4,
        });
      }

      setCategoryData(result);
    };

    loadData();
  }, []);

  return (
    <>
      {categoryData.map((item) => (
        <CategorySection
          key={item.category}
          title={item.category}
          products={item.products}
        />
      ))}
    </>
  );
}
