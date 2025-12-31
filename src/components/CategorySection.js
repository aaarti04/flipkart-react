import { useNavigate } from "react-router-dom";
import "./CategorySection.css";

export default function CategorySection({ title, products }) {
  const navigate = useNavigate();

  return (
    <section className="category-section fk_container">
      <h2
        className="section-title clickable"
        onClick={() => navigate(`/category/${title}`)}
      >
        {title} <span className="view-all">View All</span>
      </h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
            <img src={product.thumbnail} alt={product.title} />
            <span>{product.title}</span>
            <p className="brand">{product.brand}</p>
             <span class="ratingnumber">{product.rating} ⭐ </span> 
             <span class="total_review">({product.reviews.length})</span>
            <div className="price-box">
              
              <span className="price">₹{Math.round(product.price - (product.price * product.discountPercentage) / 100)}</span>
              <span class="original">{product.price}</span>
              <span className="off">
                {Math.round(product.discountPercentage)}% off
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
