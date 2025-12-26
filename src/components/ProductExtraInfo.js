import "./productDetails.css";
function ProductExtraInfo({ product }) {
  return (
    <div className="extra">
      <div>
        <h3>Highlights</h3>
        <ul>
          {product.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
          <li>Weight: {product.weight} kg</li>
          <li>
            Size: {product.dimensions.width} ×
            {product.dimensions.height} ×
            {product.dimensions.depth} cm
          </li>
        </ul>
      </div>

      <div>
        <h3>Delivery</h3>
        <p>{product.shippingInformation}</p>
        <p>Min Order: {product.minimumOrderQuantity}</p>
      </div>
    </div>
  );
}
export default ProductExtraInfo;
