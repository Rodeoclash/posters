import { useContext } from "react";

import CartContext from "../../contexts/cart";

const CartSize = () => {
  const { size } = useContext(CartContext);
  const label = size === 1 ? "item" : "items";

  return (
    <span>
      {size} {label}
    </span>
  );
};

export default CartSize;
