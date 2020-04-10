import { useContext } from "react";

import CartContext from "../../contexts/cart";

import styles from "./CartProductRemove.module.css";

const CartProductRemove = ({ product }) => {
  const { removeProduct, productInCart } = useContext(CartContext);

  if (productInCart(product) === false) {
    return null;
  }

  return (
    <button onClick={removeProduct.bind(this, product)}>Remove product</button>
  );
};

export default CartProductRemove;
