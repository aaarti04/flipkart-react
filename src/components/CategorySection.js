import "./CategorySection.css";

export default function CategorySection({ title, products }) {
  return (
    <section className="category-section fk_container">
      <h2 className="section-title">{title}</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.images[0]} alt={product.name} />
            <h4>{product.name}</h4>
            <p className="brand">{product.brand}</p>

            <div className="price-box">
              <span className="price">₹{product.price}</span>
              <span className="original">₹{product.originalPrice}</span>
              <span className="off">{product.offerPercentage}% off</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
