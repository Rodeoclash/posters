import { createContext, useContext } from "react";

const CartContext = createContext({
  add: () => {},
  busy: false,
  contains: () => {},
  hide: () => {},
  remove: () => {},
  show: () => {},
  showing: false,
  size: 0,
  variants: [],
});

export const useCartContext = () => useContext(CartContext);

export default CartContext;
