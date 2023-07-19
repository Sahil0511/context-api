import React, { useContext, useEffect, useState } from "react";
import { CartItem } from "./Context";
import SingleProd from "./SingleProd";

const Cart = () => {
  const [total, setTotal] = useState("0");
  const { cart } = useContext(CartItem);

  useEffect(() => {
    setTotal(cart.reduce((acc, currElem) => acc + Number(currElem.price), 0));
  }, [cart]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: 30 }}>Cart</span>
        <br />
        <span style={{ fontSize: 30 }}>Total Price : Rs.{total}</span>

        <div className="productContainer">
          {cart.map((prod) => (
            <SingleProd prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
