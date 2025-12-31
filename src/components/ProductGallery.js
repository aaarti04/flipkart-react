import { useState } from "react";
import "./productDetails.css";

export default function ProductGallery({ images = [], thumbnail }) {
  const allImages = thumbnail ? [thumbnail, ...images] : images;
  const [activeImg, setActiveImg] = useState(allImages[0]);

  return (
    <div className="product-gallery">
      <div className="thumbs">
        {allImages.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setActiveImg(img)}
            className={activeImg === img ? "active" : ""}
            alt=""
          />
        ))}
      </div>

      <div className="main-image">
        <img src={activeImg} alt="Product" />
      </div>
    </div>
  );
}
