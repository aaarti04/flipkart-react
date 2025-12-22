import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import CategorySection from "../components/CategorySection";
import { categories } from "../data/categories";
import { getTopDiscountProducts } from "../utils/getTopDiscountProducts";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <CategoryBar />

        {categories.map((category) => {
          const topProducts = getTopDiscountProducts(category, 4);

          if (topProducts.length === 0) return null;

          return (
            <CategorySection
              key={category.id}
              title={category.name}
              products={topProducts}
            />
          );
        })}
      </main>

      <Footer />
    </>
  );
}
