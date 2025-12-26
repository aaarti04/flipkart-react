import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import CategorySection from "../components/CategorySection";

import {
  fetchCategories,
  fetchProductsByCategory,
} from "../services/productService";
import { getTopDiscountProducts } from "../utils/getTopDiscountProducts";

export default function Home() {
  const [categorySections, setCategorySections] = useState([]);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        // ✅ Fetch categories
        const allCategories = await fetchCategories();

        // ✅ ONLY TOP 8 categories
        const top8Categories = allCategories.slice(0, 8);

        const sections = [];

        for (let category of top8Categories) {
          // 👇 if category is string, use directly
          const products = await fetchProductsByCategory(category.slug);
 
          // ✅ Top 4 highest discount products
          const topProducts = getTopDiscountProducts(products, 4);

          if (topProducts.length > 0) {
            sections.push({
              name: category.slug,
              products: topProducts,
            });
          }
        }

        setCategorySections(sections);
      } catch (error) {
        console.error("Home page data error:", error);
      }
    };

    loadHomeData();
  }, []);

  return (
    <>
      <Header />
      <main className="home">
        <CategoryBar categories={categorySections.map(c => c.name)} />
        {categorySections.map((category) => (
          <CategorySection
            key={category.name}
            title={category.name}
            products={category.products}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}
