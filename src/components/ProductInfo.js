import "./productDetails.css";
function ProductInfo({ product }) {
  const discountedPrice = Math.round(
    product.price - (product.price * product.discountPercentage) / 100
  );

  return (
    <div className="info">
      <h1>{product.title}</h1>

      <div className="rating">
        <span className="ratingnumber">{product.rating} ⭐</span>
        <span className="total_review"> {product.reviews.length} Reviews</span>
      </div>

      <div className="price_details">
       <span className="special_price">Special Price </span>
       <div className="price">
        <span className="current">₹{discountedPrice}</span>
        <span className="original">₹{product.price}</span>
        <span className="off">
          {product.discountPercentage}% off
        </span>
        </div>
      </div>

      <p className="stock">{product.availabilityStatus}</p>

      <ul className="offerss">
        <li>💸 Special discount available</li>
        <li>🛡 {product.warrantyInformation}</li>
        <li>↩ {product.returnPolicy}</li>
      </ul>

    
    </div>
  );
}
export default ProductInfo;