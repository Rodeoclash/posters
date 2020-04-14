import { useState } from "react";
import CartContext from "../contexts/cart.js";
import * as cart from "../services/cart";

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState({
    products: [],
    showing: false,
  });

  const add = (product) => {
    setCartState(cart.add(cartState, product));
  };

  const contains = (product) => {
    return cart.contains(cartState, product);
  };

  const hide = () => {
    setCartState(cart.hide(cartState));
  };

  const remove = (product) => {
    setCartState(cart.remove(cartState, product));
  };

  const show = () => {
    setCartState(cart.show(cartState));
  };

  const value = {
    add,
    contains,
    hide,
    products: cartState.products,
    remove,
    show,
    showing: cartState.showing,
    size: cartState.products.length,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
