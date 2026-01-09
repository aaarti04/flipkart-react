import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
export default function Detailheader() {
   const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/search?q=${query}`);
  };
  return (
    <header className="fk-detailsheader">
       <div className='row'>
         <div className='col col-md-7'>
            <div className='row'>
            <div className='col col-md-3'>
              <div className="fk-logo">
               <div class="gWHkja">
                <a href="/">
                <img width="75" src={`${process.env.PUBLIC_URL}/imgs/flipkart-plus_8d85f4.png`} alt="Flipkart" title="Flipkart" className="TVd0Ah" /></a>
                <a className="p8iyLE" href="/plus">Explore <span className="stfyUS">Plus</span>
                <img width="10" src={`${process.env.PUBLIC_URL}/imgs/plus_aef861.png`}/></a></div>
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
        <div className="col col-md-3">
         <a href="/"> <button className="btn btn-sm btn_login">Login</button> </a></div>
        <div className="col col-md-3"><a href="/"> Become a Seller</a></div>
        <div className="col col-md-3"><a href="/">More</a></div>
         <div className="col col-md-3"><a href="/"><img src={`${process.env.PUBLIC_URL}/imgs/cart.svg`}alt="user-icon" className="fk-icon" /><span> Cart </span></a></div>
      </div>
      </div>
       </div>
    </header>
  );
}
