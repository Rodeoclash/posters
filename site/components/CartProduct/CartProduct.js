import CartProductRemove from "../CartProductRemove";
import ProductImage from "../ProductImage";
import ProductLink from "../ProductLink";

import styles from "./CartProduct.module.css";

const CartProduct = ({ product }) => (
  <div className={styles.root}>
    <div className={styles.image}>
      <ProductLink product={product}>
        <ProductImage product={product} />
      </ProductLink>
    </div>
    <div className={styles.content}>
      <h4 className={styles.title}>{product.title}</h4>
      <CartProductRemove product={product} />
      <ProductLink product={product} />
    </div>
  </div>
);

export default CartProduct;
