import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import CategorySection from "../components/CategorySection";

import {
  fetchCategories,
  fetchProductsByCategory,
} from "../services/productService";

export default function CategoryListing() {
  const { slug } = useParams();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const cats = await fetchCategories();
      setCategories(cats);

      const data = await fetchProductsByCategory(slug);
      setProducts(data);

      setLoading(false);
    };

    loadData();
  }, [slug]);

  return (
    <>
      <Header />

      {/* ✅ Category bar added */}
      <CategoryBar
        categories={categories}
        activeCategory={slug}
      />

      <main className="category-listing">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <CategorySection
            title={slug}
            products={products}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
