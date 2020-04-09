import CartProductRemove from "../CartProductRemove";
import ProductLink from "../ProductLink";

import styles from "./CartProduct.module.css";

const CartProduct = ({ product }) => (
  <div>
    <img className={styles.image} src={product.src} />
    <h4>{product.title}</h4>
    <CartProductRemove product={product} />
    <ProductLink product={product} />
  </div>
);

export default CartProduct;
