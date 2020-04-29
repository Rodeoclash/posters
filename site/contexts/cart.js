import { createContext, useContext } from "react";

const CartContext = createContext({
  add: () => {},
  busy: false,
  contains: () => {},
  fetch: () => {},
  hide: () => {},
  lineItems: [],
  order: () => {},
  orderable: false,
  remove: () => {},
  show: () => {},
  showing: false,
  size: 0,
});

export const useCartContext = () => useContext(CartContext);

export default CartContext;
