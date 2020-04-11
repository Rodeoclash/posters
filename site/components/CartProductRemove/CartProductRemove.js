import { useCartContext } from "../../contexts/cart";

import styles from "./CartProductRemove.module.css";

const CartProductRemove = ({ product }) => {
  const { removeProduct, productInCart } = useCartContext();

  if (productInCart(product) === false) {
    return null;
  }

  return (
    <button onClick={removeProduct.bind(this, product)}>Remove product</button>
  );
};

export default CartProductRemove;
