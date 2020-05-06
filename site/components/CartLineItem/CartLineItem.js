import LineItemRemoveFromCart from "../LineItemRemoveFromCart";
import ProductLink from "../ProductLink";
import VariantImage from "../VariantImage";
import VariantPrice from "../VariantPrice";

import styles from "./CartLineItem.module.css";

const CartLineItem = ({ lineItem }) => {
  const variant = lineItem.variant;
  const product = variant.product;

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <ProductLink product={product}>
          <VariantImage variant={variant} />
        </ProductLink>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{lineItem.title}</h4>
        <VariantPrice variant={variant} />
        <LineItemRemoveFromCart lineItem={lineItem} />
        <ProductLink product={product} />
      </div>
    </div>
  );
};

export default CartLineItem;
