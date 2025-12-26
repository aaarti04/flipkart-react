import { useState } from "react";

export default function ProductGallery({ images = [], thumbnail }) {
  const [activeImg, setActiveImg] = useState(thumbnail || images[0]);

  return (
    <div className="product-gallery">
      <div className="thumbs">
        {[thumbnail, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => setActiveImg(img)}
            className={activeImg === img ? "active" : ""}
          />
        ))}
      </div>

      <div className="main-image">
        <img src={activeImg} alt="Product" />
      </div>
    </div>
  );
}
