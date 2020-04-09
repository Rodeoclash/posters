import { useContext } from "react";

import CartContext from "../../contexts/cart";

const ProductAddToCart = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={addProduct.bind(this, product)}
    >
      Add to cart
    </button>
  );
};

export default ProductAddToCart;
