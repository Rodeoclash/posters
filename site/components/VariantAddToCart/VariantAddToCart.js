import { useCartContext } from "../../contexts/cart";

const VariantAddToCart = ({ variant }) => {
  const { add, contains } = useCartContext();

  if (contains(variant) === true) {
    return null;
  }

  return <button onClick={add.bind(this, variant)}>Add to cart</button>;
};

export default VariantAddToCart;
