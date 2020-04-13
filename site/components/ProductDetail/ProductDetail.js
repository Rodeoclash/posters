import Link from "next/link";
import ProductAddToCart from "../ProductAddToCart";
import ProductImage from "../ProductImage";
import ProductInCart from "../ProductInCart";
import ProductLink from "../ProductLink";
import Homelink from "../../components/UI/Homelink";

import styles from "./ProductDetail.module.css";

const ProductDetail = ({ product }) => (
  <div className={styles.root}>
    <div className={styles.image}>
      <ProductImage product={product} />
    </div>
    <div className={styles.about}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div>
        <ProductAddToCart product={product} />
        <ProductInCart product={product} />
        <p>
          <Homelink />
        </p>
      </div>
    </div>
  </div>
);

export default ProductDetail;
