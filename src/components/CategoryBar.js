import "./CategoryBar.css";
import '../App.css';
import { categories } from "../data/products";

export default function CategoryBar() {
  return (
    <div className="fk_container category-bar">
      <div className="category-inner">
        {categories.slice(0, 7).map((cat) => (
          <div className="category-item" key={cat.id}>
            <img src={cat.catImg} alt={cat.name} />
            <span>
              {cat.name}
              {cat.subCategories?.length > 0 && (
                <i class="arrow down"></i>
              )}
            </span>

            {/* DROPDOWN */}
            {cat.subCategories?.length > 0 && (
              <div className="category-dropdown">
                {cat.subCategories.map((sub, i) => (
                  <div key={i} className="dropdown-item">
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
