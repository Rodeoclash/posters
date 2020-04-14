import { useRef } from "react";
import { useCartContext } from "../../contexts/cart";

import CartProducts from "../CartProducts";
import CartSize from "../CartSize";

import styles from "./Cart.module.css";

const Cart = () => {
  const { hide, show, showing, size } = useCartContext();

  const panelEl = useRef(null);

  const handleCartClick = (event) => {
    showing === true ? hide() : show();
  };

  const handleCloseClick = (event) => {
    hide();
  };

  const handleCheckoutClick = (event) => {
    alert("do checkout");
  };

  const renderedContents = (() => {
    if (showing === true && size > 0) {
      return (
        <div className={styles.contents}>
          <CartProducts />
          <div className={styles.controls}>
            <button onClick={handleCloseClick}>Close</button>
            <button onClick={handleCheckoutClick}>Checkout</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  })();

  return (
    <div ref={panelEl} className={styles.root}>
      <a onClick={handleCartClick}>
        Your cart (<CartSize />)
      </a>
      {renderedContents}
    </div>
  );
};

export default Cart;
