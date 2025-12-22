import { useEffect, useState } from "react";
import { fetchCategories } from "../services/productService";
import { shuffleArray } from "../utils/shuffleArray";
import "./CategoryBar.css";

export default function CategoryBar() {
  const [visibleCats, setVisibleCats] = useState([]);
  const [moreCats, setMoreCats] = useState([]);

  useEffect(() => {
    fetchCategories().then((cats) => {
      const shuffled = shuffleArray(cats);
      setVisibleCats(shuffled.slice(0, 8));
      setMoreCats(shuffled.slice(8));
    });
  }, []);

  return (
    <div className="fk_container category-bar">
      <div className="category-inner">

        {/* MAIN 8 CATEGORIES */}
        {visibleCats.map((cat) => (
          <div key={cat.slug} className="category-item">
            <span className="cat-name">
              {cat.name}
            </span>
          </div>
        ))}

        {/* MORE */}
        {moreCats.length > 0 && (
          <div className="category-item more-btn">
            <span>⋮ More</span>

            <div className="category-dropdown">
              {moreCats.map((cat) => (
                <div key={cat.slug} className="dropdown-item">
                  {cat.name}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
