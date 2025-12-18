import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
// import { categories } from "../data/products";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home">
         <CategoryBar />
        {/* {categories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))} */}
      </main>

      <Footer />
    </>
  );
}
