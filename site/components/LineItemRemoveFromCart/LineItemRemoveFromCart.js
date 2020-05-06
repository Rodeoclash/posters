import { useCartContext } from "../../contexts/cart";

const LineItemRemoveFromCart = ({ lineItem }) => {
  const { busy, remove } = useCartContext();

  return (
    <button disabled={busy === true} onClick={remove.bind(this, lineItem)}>
      Remove
    </button>
  );
};

export default LineItemRemoveFromCart;
