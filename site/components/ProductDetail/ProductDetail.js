import Homelink from "../../components/UI/Homelink";
import Link from "next/link";
import ProductLink from "../ProductLink";
import VariantAddToCart from "../VariantAddToCart";
import VariantImage from "../VariantImage";
import VariantInCart from "../VariantInCart";

import styles from "./ProductDetail.module.css";

const ProductDetail = ({ product }) => {
  const variant = product.variants[0];
  const { title, description } = JSON.parse(product.description);

  // console.log("=== product description data");
  // console.log(description);

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <VariantImage variant={variant} />
      </div>
      <div className={styles.about}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <VariantAddToCart variant={variant} />
          <VariantInCart variant={variant} />
          <p>
            <Homelink />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
