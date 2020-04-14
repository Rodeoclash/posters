import { createContext, useContext } from "react";

const CartContext = createContext({
  add: () => {},
  contains: () => {},
  hide: () => {},
  products: [],
  remove: () => {},
  show: () => {},
  showing: false,
  size: 0,
});

export const useCartContext = () => useContext(CartContext);

export default CartContext;
