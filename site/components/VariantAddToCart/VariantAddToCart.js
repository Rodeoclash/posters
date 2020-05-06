import { useCartContext } from "../../contexts/cart";

const VariantAddToCart = ({ variant }) => {
  const { add, contains, busy } = useCartContext();

  if (contains(variant) === true) {
    return null;
  }

  return (
    <button disabled={busy === true} onClick={add.bind(this, variant)}>
      Add to cart
    </button>
  );
};

export default VariantAddToCart;
