import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductExtraInfo from "../components/ProductExtraInfo";
import RatingsAndReviews from "../components/RatingsAndReviews";
import { fetchProductById } from "../services/productService";
import "../components/productDetails.css";
import CategoryBar from "../components/CategoryBar";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../services/productService";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(Number(id)).then(setProduct);
  }, [id]);

  const { slug } = useParams();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const cats = await fetchCategories();
      setCategories(cats);

      const data = await fetchProductsByCategory(slug);
      setProducts(data);

      setLoading(false);
    };

    loadData();
  }, [slug]);
  if (!product) return <p className="loading">Loading product...</p>;

  return (
    <>
      <Header />
 <CategoryBar
        categories={categories}
        activeCategory={slug}
      />


      <main className="product-page fk_container">
        <div className="product-layout">

          {/* LEFT — STICKY IMAGE */}
          <div className="left-sticky">
            <ProductGallery
              images={product.images}
              thumbnail={product.thumbnail}
            />
          </div>

          {/* RIGHT — SCROLLABLE DETAILS */}
          <div className="right-scroll">
            <ProductInfo product={product} />
            <ProductExtraInfo product={product} />
            <RatingsAndReviews product={product} />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
