import { useContext } from "react";

import CartContext from "../../contexts/cart";

const ProductInCart = ({ product }) => {
  const { productInCart } = useContext(CartContext);

  if (productInCart(product) === false) {
    return null;
  }

  return <em>This product is in your cart</em>;
};

export default ProductInCart;
