import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../services/productService";
import ProductCard from "./ProductCard";
import "./similarProducts.css";

export default function SimilarProducts({ category, currentProductId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!category) return;

    fetchProductsByCategory(category).then((res) => {
      // exclude current product
      const filtered = res.filter(p => p.id !== currentProductId);
      setProducts(filtered);
    });
  }, [category, currentProductId]);
  if (!products.length) return null;

  return (
    <section className="similar-section fk_container">
      <h2>Similar Products</h2>

      <div className="similar-grid">
        {products.slice(0, 6).map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
