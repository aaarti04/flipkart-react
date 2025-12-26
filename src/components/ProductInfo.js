import "./productDetails.css";
function ProductInfo({ product }) {
  const discountedPrice = Math.round(
    product.price - (product.price * product.discountPercentage) / 100
  );

  return (
    <div className="info">
      <h1>{product.title}</h1>

      <div className="rating">
        ⭐ {product.rating}
        <span>({product.reviews.length} Reviews)</span>
      </div>

      <div className="price">
        <span className="current">₹{discountedPrice}</span>
        <span className="original">₹{product.price}</span>
        <span className="off">
          {product.discountPercentage}% off
        </span>
      </div>

      <p className="stock">{product.availabilityStatus}</p>

      <ul className="offers">
        <li>💸 Special discount available</li>
        <li>🛡 {product.warrantyInformation}</li>
        <li>↩ {product.returnPolicy}</li>
      </ul>

      <button className="cart-btn">ADD TO CART</button>
      <button className="buy-btn">BUY NOW</button>
    </div>
  );
}
export default ProductInfo;