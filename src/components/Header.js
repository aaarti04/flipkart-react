import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
export default function Header() {
   const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/search?q=${query}`);
  };
  return (
    <header className="fk-header">
       <div className='row'>
         <div className='col col-md-7'>
            <div className='row'>
            <div className='col col-md-3'>
              <div className="fk-logo">
                <a href='/'>
                <img src={`${process.env.PUBLIC_URL}/imgs/fkheaderlogo_exploreplus-11f9e2.svg`}alt="user-icon" className="fk-logo"/></a>
               </div>
             </div>
            <div className='col col-md-9'> 
                <div className="fk-search">
                    <form className="fk-search" onSubmit={handleSearch}>
                  <input
                  type="text"
                  placeholder="Search for Products, Brands and More"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <span className="fk-search-icon" onClick={handleSearch}>
                  🔍
                </span>
                </form>
                </div>
            </div>
         </div>
      </div>

      <div className='col col-md-5'> 
        <div className="row fk-action">
        <div className="col col-md-3"><a href="/"><img src={`${process.env.PUBLIC_URL}/imgs/profile.svg`}alt="user-icon" className="fk-icon"/><span>Login</span></a></div>
        <div className="col col-md-3"><a href="/"><img src={`${process.env.PUBLIC_URL}/imgs/cart.svg`}alt="user-icon" className="fk-icon" /><span> Cart </span></a></div>
        <div className="col col-md-4"><a href="/"><img src={`${process.env.PUBLIC_URL}/imgs/seller.svg`}alt="user-icon"  className="fk-icon"/><span> Become a Seller</span></a></div>
        <div className="col col-md-2">⋮</div>
      </div>
      </div>
       </div>
    </header>
  );
}
