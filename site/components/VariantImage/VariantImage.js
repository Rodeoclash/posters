import styles from "./VariantImage.module.css";

const VariantImage = ({ variant }) => {
  return <img className={styles.root} src={variant.image.src} />;
};

export default VariantImage;
