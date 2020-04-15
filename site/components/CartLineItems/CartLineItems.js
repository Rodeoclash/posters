import CartLineItem from "../CartLineItem";

import styles from "./CartLineItems.module.css";

const CartLineItems = ({ lineItems }) => {
  const renderedLineItems = lineItems.map((lineItem) => (
    <div className={styles.entry} key={lineItem.id}>
      <CartLineItem lineItem={lineItem} />
    </div>
  ));

  return <>{renderedLineItems}</>;
};

export default CartLineItems;
