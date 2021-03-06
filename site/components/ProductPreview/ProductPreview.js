import Link from "next/link";
import ProductLink from "../ProductLink";
import VariantAddToCart from "../VariantAddToCart";
import VariantImage from "../VariantImage";
import VariantInCart from "../VariantInCart";
import VariantPrice from "../VariantPrice";

import styles from "./ProductPreview.module.css";

const ProductPreview = ({ product }) => {
  const variant = product.variants[0];

  return (
    <div className={styles.root}>
      <ProductLink product={product}>
        <VariantImage variant={variant} />
      </ProductLink>
      <div className={styles.meta}>
        <h3 className={styles.title}>{product.title}</h3>
        <VariantAddToCart variant={variant} />
        <VariantInCart variant={variant} />
        <VariantPrice variant={variant} />
      </div>
    </div>
  );
};

export default ProductPreview;
