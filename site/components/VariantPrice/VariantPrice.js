import { unpackEdges } from "../../services/shopify";

import styles from "./VariantPrice.module.css";

const VariantPrice = ({ variant }) => {
  return (
    <span className={styles.root}>
      <span className={styles.amount}>${variant.priceV2.amount}</span>
      <span className={styles.currentCode}>{variant.priceV2.currencyCode}</span>
    </span>
  );
};

export default VariantPrice;
