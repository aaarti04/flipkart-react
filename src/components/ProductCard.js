import { useNavigate } from "react-router-dom";
export default function ProductCard({ product }) {
   const navigate = useNavigate();
  return (
   <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
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
  );
}
