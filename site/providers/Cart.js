import { useState } from "react";
import CartContext from "../contexts/cart.js";

import { add as cartAdd, remove as cartRemove, inCart } from "../services/cart";

const CartProvider = ({ children }) => {
  const [cart, setState] = useState({
    products: [],
  });

  const addProduct = (product) => {
    setState(cartAdd(cart, product));
  };

  const removeProduct = (product) => {
    setState(cartRemove(cart, product));
  };

  const productInCart = (product) => {
    return inCart(cart, product);
  };

  const value = {
    addProduct,
    productInCart,
    products: cart.products,
    removeProduct,
    size: cart.products.length,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
