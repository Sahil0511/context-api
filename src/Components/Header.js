import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
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
            Cart
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
