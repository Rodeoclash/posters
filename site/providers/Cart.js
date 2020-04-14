import { useState } from "react";
import CartContext from "../contexts/cart.js";
import * as cart from "../services/cart";

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState({
    variants: [],
    showing: false,
  });

  const add = (variant) => {
    setCartState(cart.add(cartState, variant));
  };

  const contains = (variant) => {
    return cart.contains(cartState, variant);
  };

  const hide = () => {
    setCartState(cart.hide(cartState));
  };

  const remove = (variant) => {
    setCartState(cart.remove(cartState, variant));
  };

  const show = () => {
    setCartState(cart.show(cartState));
  };

  const value = {
    add,
    contains,
    hide,
    remove,
    show,
    showing: cartState.showing,
    size: cartState.variants.length,
    variants: cartState.variants,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
