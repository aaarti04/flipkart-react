import "./productDetails.css";
import ReviewList from "./ReviewList";
function RatingsAndReviews({ product }) {
  return (
    <div className="reviews-section">
      <div className="summary">
        <span className="stock">{product.rating} ⭐</span>
        <p>{product.reviews.length} Reviews</p>
      </div>

      <ReviewList reviews={product.reviews} />
    </div>
  );
}
export default RatingsAndReviews;