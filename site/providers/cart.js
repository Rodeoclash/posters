import { useState } from "react";
import CartContext from "../contexts/cart.js";

const LoadingProvider = ({ children }) => {
  const [state, setState] = useState({
    products: [],
  });

  const addProduct = (product) => {
    setState({
      ...state,
      products: state.products.concat([product]),
    });
  };

  const value = {
    addProduct,
    products: state.products,
    size: state.products.length,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default LoadingProvider;
