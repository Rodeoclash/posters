import { useCartContext } from "../../contexts/cart";

import styles from "./CartVariantRemove.module.css";

const CartVariantRemove = ({ variant }) => {
  const { remove, contains } = useCartContext();

  if (contains(variant) === false) {
    return null;
  }

  return <button onClick={remove.bind(this, variant)}>Remove</button>;
};

export default CartVariantRemove;
