import { useCartContext } from "../../contexts/cart";

const CartTotal = () => {
  const { total } = useCartContext();

  return <span>{total}</span>;
};

export default CartTotal;
