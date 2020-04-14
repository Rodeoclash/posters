import { unpackEdges } from "../../services/shopify";

import styles from "./ProductImage.module.css";

const ProductImage = ({ product }) => {
  const image = product.images.edges.map(unpackEdges)[0];

  return <img className={styles.root} src={image.src} />;
};

export default ProductImage;
