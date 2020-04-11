import { useContext } from "react";

import ProductPreview from "../ProductPreview";

import styles from "./Products.module.css";

const Products = ({ products }) => {
  const renderedProducts = products.map((product) => (
    <div className={styles.product} key={product.id}>
      <ProductPreview product={product} />
    </div>
  ));

  return <div className={styles.root}>{renderedProducts}</div>;
};

export default Products;
