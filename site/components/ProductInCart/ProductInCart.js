import { useCartContext } from "../../contexts/cart";

const ProductInCart = ({ product }) => {
  const { contains } = useCartContext();

  if (contains(product) === false) {
    return null;
  }

  return <em>This product is in your cart</em>;
};

export default ProductInCart;
