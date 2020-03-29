import { useContext } from "react";
import { useObserver } from "mobx-react-lite";
import { CartContext } from "../stores/cart";

const Cart = () => {
  const store = useContext(CartContext);

  return useObserver(() => <p>Cart items: {store.counter}</p>);
};

export default Cart;
