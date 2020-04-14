import { useCartContext } from "../../contexts/cart";

import styles from "./CartProductRemove.module.css";

const CartProductRemove = ({ product }) => {
  const { remove, contains } = useCartContext();

  if (contains(product) === false) {
    return null;
  }

  return <button onClick={remove.bind(this, product)}>Remove product</button>;
};

export default CartProductRemove;
