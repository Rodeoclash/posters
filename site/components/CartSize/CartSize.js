import { useContext } from "react";

import CartContext from "../../contexts/cart";

const CartSize = () => {
  const { size } = useContext(CartContext);

  return <>Number of products: {size}</>;
};

export default CartSize;
