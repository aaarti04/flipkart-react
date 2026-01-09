import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Detailheader from "../components/Detailheader";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductExtraInfo from "../components/ProductExtraInfo";
import RatingsAndReviews from "../components/RatingsAndReviews";

import { fetchProductById, fetchCategories } from "../services/productService";
import SimilarProducts from "../components/SimilarProducts";
import "../components/productDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProductById(Number(id)).then(setProduct);
    fetchCategories().then(setCategories);
  }, [id]);

  if (!product) return <p className="loading">Loading product...</p>;

  return (
    <>
      <Detailheader />
      <CategoryBar categories={categories} activeCategory={product.category} />

      <main className="product-page fk_container">
        <div className="product-layout">

          {/* LEFT – STICKY IMAGE */}
          <div className="left-panel">
            <ProductGallery
              images={product.images}
              thumbnail={product.thumbnail}
            />

            <div className="action-buttons">
              <button className="cart-btn">ADD TO CART</button>
              <button className="buy-btn">BUY NOW</button>
            </div>
          </div>

          {/* RIGHT – DETAILS */}
          <div className="right-panel">
            <ProductInfo product={product} />
            <ProductExtraInfo product={product} />
            <RatingsAndReviews product={product} />
          </div>

        </div>
        
      </main>
<SimilarProducts
  category={product.category}
  currentProductId={product.id}
/>
      <Footer />
    </>
  );
}
