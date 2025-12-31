import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryListing from "./pages/CategoryListing.js";
import ProductDetails from "./pages/ProductDetails.js";
import SearchResults from "./components/SearchResults";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}
