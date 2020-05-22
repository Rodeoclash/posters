import { useState } from "react";
import CartContext from "../contexts/cart.js";
import * as cart from "../services/cart";

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState({
    busy: false,
    checkout: null,
    showing: false,
  });

  const fetch = async () => {
    if (cart.exists() === true) {
      const busyCart = cart.working(cartState);
      setCartState(busyCart);

      const fetchedCart = await cart.fetch(busyCart);
      setCartState(fetchedCart);

      const readyCart = cart.ready(fetchedCart);
      setCartState(readyCart);
    }
  };

  const add = async (variant) => {
    const busyCart = cart.working(cartState);
    setCartState(busyCart);

    const maybeCreatedCart =
      cart.exists() === true ? busyCart : await cart.create(busyCart);
    setCartState(maybeCreatedCart);

    const addedCart = await cart.add(maybeCreatedCart, variant);
    setCartState(addedCart);

    const readyCart = cart.ready(addedCart);
    setCartState(readyCart);

    const showingCart = cart.show(readyCart);
    setCartState(showingCart);
  };

  const remove = async (variant) => {
    const busyCart = cart.working(cartState);
    setCartState(busyCart);

    const removedCart = await cart.remove(busyCart, variant);
    setCartState(removedCart);

    const readyCart = cart.ready(removedCart);
    setCartState(readyCart);
  };

  const show = () => {
    setCartState(cart.show(cartState));
  };

  const hide = () => {
    setCartState(cart.hide(cartState));
  };

  const order = async (variant) => {
    const busyCart = cart.working(cartState);
    setCartState(busyCart);

    document.location = cartState.checkout.webUrl;
  };

  const value = {
    add,
    busy: cartState.busy,
    contains: cart.contains.bind(this, cartState),
    fetch,
    hide,
    lineItems: cart.lineItems(cartState),
    order,
    orderable: cart.orderable(cartState),
    remove,
    show,
    showing: cart.showing(cartState),
    size: cart.size(cartState),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
