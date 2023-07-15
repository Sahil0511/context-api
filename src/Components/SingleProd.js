import React from "react";
import "./index.css";

const SingleProd = ({ prod, keyV }) => {
  return (
    <>
      <div className="products" key={keyV}>
        <img src={prod.image} alt="" />
        <div className="productDesc">
          <span style={{ fontWeight: 700 }}>{prod.name}</span>
          <span>Rs.{prod.price.substring(0, 3)}</span>
        </div>

        <button className="add">Add to Cart</button>
      </div>
    </>
  );
};

export default SingleProd;
