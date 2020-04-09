import { useContext } from "react";

import CartContext from "../../contexts/cart";

const ProductAddToCart = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  return <button onClick={addProduct.bind(this, product)}>Add to cart</button>;
};

export default ProductAddToCart;
