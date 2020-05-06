import { buildClient } from "../services/shopify";

export class CheckoutIdMissing extends Error {}

// Private

const client = buildClient();

const CHECKOUT_ID = "CHECKOUT_ID";

const getCheckoutId = () => {
  return localStorage.getItem(CHECKOUT_ID);
};

const setCheckoutId = (id) => {
  return localStorage.setItem(CHECKOUT_ID, id);
};

// Getters

export const exists = () => {
  return getCheckoutId() !== null;
};

export const contains = (cart, variant) => {
  return (
    cart.checkout !== null &&
    cart.checkout.lineItems.some((lineItem) => {
      return lineItem.variant.id === variant.id;
    })
  );
};

export const size = (cart) => {
  return cart.checkout === null ? 0 : cart.checkout.lineItems.length;
};

export const lineItems = (cart) => {
  return cart.checkout === null ? [] : cart.checkout.lineItems;
};

export const showing = (cart) => {
  return cart.showing === true && size(cart) > 0;
};

export const orderable = (cart) => {
  return cart.checkout !== null && cart.checkout.webUrl;
};

// Setters

/**
 * Adds a varient to the cart
 */
export const add = async (cart, variant) => {
  const lineItemsToAdd = [
    {
      variantId: variant.id,
      quantity: 1,
    },
  ];

  const checkout = await client.checkout.addLineItems(
    getCheckoutId(),
    lineItemsToAdd
  );

  return {
    ...cart,
    checkout,
  };
};

export const remove = async (cart, lineItem) => {
  const lineItemIdsToRemove = [lineItem.id];

  const checkout = await client.checkout.removeLineItems(
    getCheckoutId(),
    lineItemIdsToRemove
  );

  return {
    ...cart,
    checkout,
  };
};

/**
 * Creates a new cart and stores the cart id
 */
export const create = async (cart) => {
  const checkout = await client.checkout.create();

  setCheckoutId(checkout.id);

  return {
    ...cart,
    checkout,
  };
};

/**
 * Fetch the cart. Check if it is possible to fetch a cart first using the checkout id.
 */
export const fetch = async (cart) => {
  if (exists() === false) {
    throw new CheckoutIdMissing();
  }

  const checkout = await client.checkout.fetch(getCheckoutId());

  return {
    ...cart,
    checkout,
  };
};

/**
 * Show the cart (used in cart toggle dropdown)
 */
export const show = (cart) => {
  return {
    ...cart,
    showing: true,
  };
};

/**
 * Hide the cart (used in cart toggle dropdown)
 */
export const hide = (cart) => {
  return {
    ...cart,
    showing: false,
  };
};

/**
 * Show the cart is ready for actions
 */
export const ready = (cart) => {
  return {
    ...cart,
    busy: false,
  };
};

/**
 * Show that the cart is busy doing something
 */
export const working = (cart) => {
  return {
    ...cart,
    busy: true,
  };
};
