import Link from "next/link";
import ProductAddToCart from "../ProductAddToCart";
import ProductImage from "../ProductImage";
import ProductInCart from "../ProductInCart";
import ProductLink from "../ProductLink";

import styles from "./ProductPreview.module.css";

const ProductPreview = ({ product }) => (
  <div className={styles.root}>
    <ProductImage product={product} />
    <h3>{product.title}</h3>
    <div>
      <ProductLink product={product}>View</ProductLink>
      <ProductAddToCart product={product} />
      <ProductInCart product={product} />
    </div>
  </div>
);

export default ProductPreview;
