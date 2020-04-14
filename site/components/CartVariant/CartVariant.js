import CartVariantRemove from "../CartVariantRemove";
import ProductImage from "../ProductImage";
import ProductLink from "../ProductLink";

import styles from "./CartVariant.module.css";

const CartVariant = ({ variant }) => {
  const product = variant.product;

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <ProductLink product={product}>
          <ProductImage product={product} />
        </ProductLink>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{product.title}</h4>
        <CartVariantRemove variant={variant} />
        <ProductLink product={product} />
      </div>
    </div>
  );
};

export default CartVariant;
