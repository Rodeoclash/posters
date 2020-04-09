import CartProducts from "../CartProducts";
import CartSize from "../CartSize";

const Cart = () => (
  <>
    <h2>
      Your cart (<CartSize />)
    </h2>
    <CartProducts />
  </>
);

export default Cart;
