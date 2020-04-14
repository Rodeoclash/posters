import { useContext } from "react";

import ProductPreview from "../ProductPreview";

import styles from "./ProductGrid.module.css";

const ProductGrid = ({ children, products }) => {
  const renderedProducts = products.map((product) => (
    <div className={styles.product} key={product.id}>
      <ProductPreview product={product} />
    </div>
  ));

  return (
    <div className={styles.root}>
      <div className={styles.hero}>{children}</div>
      {renderedProducts}
    </div>
  );
};

export default ProductGrid;
