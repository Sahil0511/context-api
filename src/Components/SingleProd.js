import React, { useState } from "react";
import "./index.css";

const SingleProd = ({ prod, keyV }) => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="products" key={keyV}>
        <img src={prod.image} alt="" />
        <div className="productDesc">
          <span style={{ fontWeight: 700 }}>{prod.name}</span>
          <span>Rs.{prod.price.substring(0, 3)}</span>
        </div>

        {cart.includes(prod) ? (
          <button
            className="add remove"
            onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
          >
            Remove from Cart
          </button>
        ) : (
          <button className="add" onClick={() => setCart([...cart, prod])}>
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};

export default SingleProd;
