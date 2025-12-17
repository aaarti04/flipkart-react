import Header from "../components/Header";
import Footer from "../components/Footer";
import CategorySection from "../components/CategorySection";
import { categories } from "../data/products";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home">
        {categories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </main>

      <Footer />
    </>
  );
}
