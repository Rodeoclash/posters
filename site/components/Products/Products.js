import { useContext } from "react";

import ProductThumbnail from "../ProductThumbnail";

import styles from "./Products.module.css";

const Products = ({ products }) => {
  const renderedProducts = products.map((product) => (
    <div className={styles.product} key={product.id}>
      <ProductThumbnail product={product} />
    </div>
  ));

  return <div className={styles.root}>{renderedProducts}</div>;
};

export default Products;
