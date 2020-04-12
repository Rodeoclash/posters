import Link from "next/link";
import ProductAddToCart from "../ProductAddToCart";
import ProductImage from "../ProductImage";
import ProductInCart from "../ProductInCart";
import ProductLink from "../ProductLink";

import styles from "./ProductDetail.module.css";

const ProductDetail = ({ product }) => (
  <div className={styles.root}>
    <ProductImage product={product} />
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <div>
      <ProductAddToCart product={product} />
      <ProductInCart product={product} />
    </div>
  </div>
);

export default ProductDetail;
