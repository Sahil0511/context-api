import React, { createContext, useState } from "react";

export const CartItem = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <>
      <CartItem.Provider value={{ cart, setCart }}>
        {children}
      </CartItem.Provider>
    </>
  );
};

export default Context;
