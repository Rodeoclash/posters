import { useContext } from "react";

import CartContext from "../../contexts/cart";

const ProductAddToCart = ({ product }) => {
  const { addProduct, productInCart } = useContext(CartContext);

  if (productInCart(product) === true) {
    return null;
  }

  return <button onClick={addProduct.bind(this, product)}>Add to cart</button>;
};

export default ProductAddToCart;
