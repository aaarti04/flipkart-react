import { useEffect, useState } from "react";
import { fetchCategories } from "../services/productService";
import "./CategoryBar.css";

export default function CategoryBar() {
  const [visibleCats, setVisibleCats] = useState([]);
  const [moreCats, setMoreCats] = useState([]);

  useEffect(() => {
    fetchCategories().then((cats) => {
      setVisibleCats(cats.slice(0, 8));
      setMoreCats(cats.slice(8));
    });
  }, []);

  return (
    <div className="fk_container category-bar">
      <div className="category-inner">

        {/* MAIN 8 CATEGORIES */}
        {visibleCats.map((cat) => (
          <div key={cat.slug} className="category-item">
            <span className="cat-name">
           <a href={`/category/${cat.slug}`} className="cate_name">{cat.name}</a>
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
                   <a href={`/category/${cat.slug}`} className="cate_name">{cat.name}</a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
