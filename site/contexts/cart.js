import { createContext } from "react";

const CartContext = createContext({
  addProduct: () => {},
  inCart: () => {},
  removeProduct: () => {},
  size: 0,
});

export default CartContext;
