import Link from "next/link";
import ProductAddToCart from "../ProductAddToCart";
import ProductImage from "../ProductImage";
import ProductInCart from "../ProductInCart";
import ProductLink from "../ProductLink";
import ProductPrice from "../ProductPrice";

import styles from "./ProductPreview.module.css";

const ProductPreview = ({ product }) => {
  return (
    <div className={styles.root}>
      <ProductLink product={product}>
        <ProductImage product={product} />
      </ProductLink>
      <div className={styles.meta}>
        <h3 className={styles.title}>{product.title}</h3>
        <ProductAddToCart product={product} />
        <ProductInCart product={product} />
        <ProductPrice product={product} />
      </div>
    </div>
  );
};

export default ProductPreview;
