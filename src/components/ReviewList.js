function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map((r, i) => (
        <div key={i} className="review">
          <span className="star">⭐ {r.rating}</span>
          <p>{r.comment}</p>
          <small>
            {r.reviewerName} •{" "}
            {new Date(r.date).toDateString()}
          </small>
        </div>
      ))}
    </div>
  );
}
export default ReviewList;