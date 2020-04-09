import Link from "next/link";
import ProductAddToCart from "../ProductAddToCart";
import ProductLink from "../ProductLink";

import styles from "./ProductThumbnail.module.css";

const ProductThumbnail = ({ product }) => (
  <div className={styles.root}>
    <img className={styles.image} src={product.src} />
    <h3 className="font-bold">{product.title}</h3>
    <div className="flex-1 p-2">
      <div className="p-1">
        <ProductLink product={product} />
      </div>
      <div className="p-1">
        <ProductAddToCart product={product} />
      </div>
    </div>
  </div>
);

export default ProductThumbnail;
