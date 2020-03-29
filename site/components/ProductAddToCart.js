import { useContext } from "react";
import { CartContext } from "../stores/cart";

const ProductAddToCart = ({ product }) => {
  const store = useContext(CartContext);

  return (
    <button onClick={() => (store.counter = store.counter + 1)}>
      Add To Cart
    </button>
  );
};

export default ProductAddToCart;
