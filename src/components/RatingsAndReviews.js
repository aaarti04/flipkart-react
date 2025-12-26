import "./productDetails.css";
import ReviewList from "./ReviewList";
function RatingsAndReviews({ product }) {
  return (
    <div className="reviews-section">
      <div className="summary">
        <h2>{product.rating} ⭐</h2>
        <p>{product.reviews.length} Reviews</p>
      </div>

      <ReviewList reviews={product.reviews} />
    </div>
  );
}
export default RatingsAndReviews;