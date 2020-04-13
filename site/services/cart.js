import { some, reject } from "lodash/fp";

export class ProductNotFound extends Error {}
export class ProductExists extends Error {}

export const show = (cart) => {
  return {
    ...cart,
    showing: true,
  };
};

export const hide = (cart) => {
  return {
    ...cart,
    showing: false,
  };
};

export const contains = (cart, product) => {
  return some(product)(cart.products);
};

export const add = (cart, product) => {
  if (contains(cart, product) === true) {
    throw new ProductExists();
  }

  return {
    ...show(cart),
    products: cart.products.concat([product]),
  };
};

export const remove = (cart, product) => {
  if (contains(cart, product) === false) {
    throw new ProductNotFound();
  }

  return {
    ...show(cart),
    products: reject({ id: product.id })(cart.products),
  };
};
