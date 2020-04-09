import { useContext } from "react";

import CartContext from "../../contexts/cart";

import CartProduct from "../CartProduct";

const CartProducts = () => {
  const { products } = useContext(CartContext);

  const renderedProducts = products.map((product) => (
    <React.Fragment key={product.id}>
      <CartProduct product={product} />
    </React.Fragment>
  ));

  return <>{renderedProducts}</>;
};

export default CartProducts;
