import { createContext } from "react";

const CartContext = createContext({
  size: 0,
  addProduct: () => {},
});

export default CartContext;
