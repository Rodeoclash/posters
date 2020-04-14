import { unpackEdges } from "../../services/shopify";

import styles from "./ProductPrice.module.css";

const ProductPrice = ({ product }) => {
  const variants = product.variants.edges.map(unpackEdges);

  return (
    <span className={styles.root}>
      <span className={styles.amount}>${variants[0].priceV2.amount}</span>
      <span className={styles.currentCode}>
        {variants[0].priceV2.currencyCode}
      </span>
    </span>
  );
};

export default ProductPrice;
