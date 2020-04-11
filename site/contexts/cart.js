import { createContext, useContext } from "react";

const CartContext = createContext({
  addProduct: () => {},
  inCart: () => {},
  removeProduct: () => {},
  size: 0,
});

export const useCartContext = () => useContext(CartContext);

export default CartContext;
