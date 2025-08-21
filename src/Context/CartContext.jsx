// CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  return (
    <CartContext.Provider value={{ paymentHistory, setPaymentHistory }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
