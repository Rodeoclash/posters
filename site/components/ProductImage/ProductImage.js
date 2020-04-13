import { unpackEdges } from "../../services/shopify";

import styles from "./ProductImage.module.css";

const ProductImage = ({ product }) => {
  const images = product.images.edges.map(unpackEdges);

  return <img className={styles.root} src={images[0].src} />;
};

export default ProductImage;
