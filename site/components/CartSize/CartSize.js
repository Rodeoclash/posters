import { useCartContext } from "../../contexts/cart";

const CartSize = () => {
  const { size } = useCartContext();
  const label = size === 1 ? "item" : "items";

  return (
    <span>
      {size} {label}
    </span>
  );
};

export default CartSize;
