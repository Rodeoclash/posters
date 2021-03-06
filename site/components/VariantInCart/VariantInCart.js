import { useCartContext } from "../../contexts/cart";

const VariantInCart = ({ variant }) => {
  const { contains } = useCartContext();

  if (contains(variant) === false) {
    return null;
  }

  return <em>This item is in your cart</em>;
};

export default VariantInCart;
