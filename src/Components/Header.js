import React, { useContext } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { CartItem } from "./Context";

const Header = () => {
  const { cart } = useContext(CartItem);
  return (
    <>
      <span className="header">Context API</span>
      <ul className="nav">
        <li>
          <Link to="/" className="prodLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="prodLink">
            Cart({cart.length})
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
