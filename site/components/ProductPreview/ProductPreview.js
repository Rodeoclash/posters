import Link from "next/link";
import ProductAddToCart from "../ProductAddToCart";
import ProductImage from "../ProductImage";
import ProductInCart from "../ProductInCart";
import ProductLink from "../ProductLink";

import styles from "./ProductPreview.module.css";

const ProductPreview = ({ product }) => (
  <div className={styles.root}>
    <ProductLink product={product}>
      <ProductImage product={product} />
    </ProductLink>
    <div className={styles.meta}>
      <h3 className={styles.title}>{product.title}</h3>
      <ProductAddToCart product={product} />
      <ProductInCart product={product} />
    </div>
  </div>
);

export default ProductPreview;
