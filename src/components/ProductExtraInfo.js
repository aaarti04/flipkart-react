import "./productDetails.css";
function ProductExtraInfo({ product }) {
  return (
    <div className="extra">
      <div className="specifications">
        <div className="speci_title">Specifications</div>
       <ul className="offers">
  <li>
    <span className="label">Brand</span>
    <span className="value">{product.brand}</span>
  </li>

  <li>
    <span className="label">Weight</span>
    <span className="value">{product.weight} kg</span>
  </li>

  <li>
    <span className="label">Size</span>
    <span className="value">
      {product.dimensions.width} ×
      {product.dimensions.height} ×
      {product.dimensions.depth} cm
    </span>
  </li>

  <li>
    <span className="label">Warranty</span>
    <span className="value">{product.warrantyInformation}</span>
  </li>
</ul>

      </div>
    </div>
  );
}
export default ProductExtraInfo;
