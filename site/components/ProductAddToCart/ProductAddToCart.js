import { useCartContext } from "../../contexts/cart";

const ProductAddToCart = ({ product }) => {
  const { add, contains } = useCartContext();

  if (contains(product) === true) {
    return null;
  }

  return <button onClick={add.bind(this, product)}>Add to cart</button>;
};

export default ProductAddToCart;
