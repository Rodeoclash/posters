import { useCartContext } from "../../contexts/cart";

const ProductInCart = ({ product }) => {
  const { productInCart } = useCartContext();

  if (productInCart(product) === false) {
    return null;
  }

  return <em>This product is in your cart</em>;
};

export default ProductInCart;
