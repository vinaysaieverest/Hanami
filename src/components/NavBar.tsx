import { useContext } from "react";
import { Htype } from "../types";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from "../Context/GlobalContext";

export const Button = ({ logo, login  }: Htype) => {
  const {setSearch} = useContext(dataContext)
  const navigate = useNavigate();
  const addedItems=()=>{
    navigate(`/cart`);
  }
  const {noOfCartItem} = useContext(dataContext)
  const goToHome=()=>{
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
 
  
  return (
    <div className="header">
      <div className="logo">
        <img  className="logo-image" src="/Hanami/assets/hanami.jpg" alt="not found"  onClick={goToHome} />
      </div>
      <div className="search_div">
        <input placeholder="Search items" className="search_placeholder"  onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())} />
      </div>
      <div className="button_1">
        <div className="cart_name" >
        <FaShoppingCart  className="button3" onClick={addedItems} />
        <p className="number_of_items" onClick={addedItems}>{noOfCartItem}</p>
        </div>
        <button className="button2">{login}</button>
      </div>
    </div>



  );
};
