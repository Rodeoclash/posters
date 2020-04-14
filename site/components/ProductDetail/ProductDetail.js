import { unpackEdges } from "../../services/shopify";

import Homelink from "../../components/UI/Homelink";
import Link from "next/link";
import ProductImage from "../ProductImage";
import ProductLink from "../ProductLink";
import VariantAddToCart from "../VariantAddToCart";
import VariantInCart from "../VariantInCart";

import styles from "./ProductDetail.module.css";

const ProductDetail = ({ product }) => {
  const variant = product.variants.edges.map(unpackEdges)[0];

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <ProductImage product={product} />
      </div>
      <div className={styles.about}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
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
