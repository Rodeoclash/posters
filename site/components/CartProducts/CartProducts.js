import { useCartContext } from "../../contexts/cart";
import CartProduct from "../CartProduct";

import styles from "./CartProducts.module.css";

const CartProducts = () => {
  const { products } = useCartContext();

  const renderedProducts = products.map((product) => (
    <div className={styles.product} key={product.id}>
      <CartProduct product={product} />
    </div>
  ));

  return <>{renderedProducts}</>;
};

export default CartProducts;
