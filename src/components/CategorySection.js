import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function CategorySection({ category }) {
  const filtered = products.filter(
    (p) => p.category === category.name
  );

  const random10 = [...filtered]
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  return (
    <section className="category-section">
      <h2>{category.name}</h2>

      <div className="subcategories">
        {category.subCategories.map((sub) => (
          <span key={sub}>{sub}</span>
        ))}
      </div>

      <div className="product-grid">
        {random10.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
