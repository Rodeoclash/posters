import styles from "./ProductImage.module.css";

const ProductImage = ({ product }) => (
  <img className={styles.root} src={product.src} />
);

export default ProductImage;
