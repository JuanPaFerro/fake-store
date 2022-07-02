import React, { useState, createContext, useEffect } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem("cartContent")) {
      setCartContent(JSON.parse(window.localStorage.getItem("cartContent")));
    }
  }, []);

  const saveCartToLocal = () => {
    window.localStorage.setItem("cartContent", JSON.stringify(cartContent));
  };
  const addProductToCart = (product) => {
    const newCartContent = [...cartContent];
    const existingProduct = newCartContent.find((el) => el.id === product.id);
    if (existingProduct) {
      ++existingProduct.amount;
    } else {
      newCartContent.push({ ...product, amount: 1 });
    }
    setCartContent(newCartContent);
    saveCartToLocal();
  };
  const removeProductFromCart = (productId) => {
    let newCartContent = [...cartContent];
    const targetProduct = newCartContent.find((el) => el.id === productId);
    if (targetProduct.amount > 1) {
      --targetProduct.amount;
    } else {
      const index = newCartContent.findIndex(
        (el) => el.id === targetProduct.id
      );
      const aux = [
        ...newCartContent.slice(0, index),
        ...newCartContent.slice(index + 1, newCartContent.length),
      ];
      newCartContent = [...aux];
    }
    setCartContent(newCartContent);
    saveCartToLocal();
  };

  const clearCart = () => {
    setCartContent([]);
    saveCartToLocal();
  };

  const value = {
    cartContent,
    addProductToCart,
    removeProductFromCart,
    clearCart,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
