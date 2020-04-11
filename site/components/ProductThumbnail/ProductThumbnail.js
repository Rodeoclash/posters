import Link from "next/link";
import ProductAddToCart from "../ProductAddToCart";
import ProductImage from "../ProductImage";
import ProductInCart from "../ProductInCart";
import ProductLink from "../ProductLink";

import styles from "./ProductThumbnail.module.css";

const ProductThumbnail = ({ product }) => (
  <div className={styles.root}>
    <ProductImage product={product} />
    <h3>{product.title}</h3>
    <div>
      <div>
        <ProductLink product={product} />
      </div>
      <div>
        <ProductAddToCart product={product} />
        <ProductInCart product={product} />
      </div>
    </div>
  </div>
);

export default ProductThumbnail;
