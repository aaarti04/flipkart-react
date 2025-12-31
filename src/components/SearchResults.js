import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { searchProducts } from "../services/productService";

export default function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (query.trim()) {
      searchProducts(query).then(setProducts);
    }
  }, [query]);

  return (
    <>
      <Header />

      <main className="fk_container">
        {/* <h2>
          Search results for <strong>"{query}"</strong>
        </h2> */}

        {products.length === 0 ? (
        <div className="forofor">
         <div className="not_found">
            <span className="not_f">Item Not Found</span>
             <span ><a href="/">Go Back</a></span>
         </div>
         </div>
          
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
