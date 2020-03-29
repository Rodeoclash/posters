import { createContext } from "react";
import { useObservable } from "mobx-react-lite";

const CartContext = createContext();

function Cart({ children }) {
  const store = useObservable({ counter: 0 });
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}

export { Cart, CartContext };
