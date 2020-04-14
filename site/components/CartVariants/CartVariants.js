import { useCartContext } from "../../contexts/cart";
import CartVariant from "../CartVariant";

import styles from "./CartVariants.module.css";

const CartVariants = () => {
  const { variants } = useCartContext();

  const renderedVariants = variants.map((variant) => (
    <div className={styles.variant} key={variant.id}>
      <CartVariant variant={variant} />
    </div>
  ));

  return <>{renderedVariants}</>;
};

export default CartVariants;
