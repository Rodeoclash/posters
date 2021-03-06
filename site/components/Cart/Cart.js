import { useRef, useEffect } from "react";
import { useCartContext } from "../../contexts/cart";

import CartSize from "../CartSize";
import CartLineItems from "../CartLineItems";

import styles from "./Cart.module.css";

const Cart = () => {
  const {
    busy,
    fetch,
    hide,
    lineItems,
    order,
    orderable,
    show,
    showing,
  } = useCartContext();

  const panelEl = useRef(null);

  const handleCartClick = (event) => {
    showing === true ? hide() : show();
  };

  const handleCloseClick = (event) => {
    hide();
  };

  const handleCheckoutClick = (event) => {
    order();
  };

  const renderedContents = (() => {
    if (showing === true) {
      return (
        <div className={styles.contents}>
          <CartLineItems lineItems={lineItems} />
          <div className={styles.controls}>
            <button onClick={handleCloseClick}>Close</button>
            <button
              disabled={busy || orderable === false}
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  })();

  const renderedBusy = (() => {
    if (busy === true) {
      return <em>Processing...</em>;
    } else {
      return null;
    }
  })();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div ref={panelEl} className={styles.root}>
      <a onClick={handleCartClick}>
        Your cart (<CartSize />) {renderedBusy}
      </a>
      {renderedContents}
    </div>
  );
};

export default Cart;
