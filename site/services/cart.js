import { some, reject } from "lodash/fp";

export class ProductNotFound extends Error {}
export class ProductExists extends Error {}

export const inCart = (cart, product) => {
  return some(product)(cart.products);
};

export const add = (cart, product) => {
  if (inCart(cart, product) === true) {
    throw new ProductExists();
  }

  return {
    ...cart,
    products: cart.products.concat([product]),
  };
};

export const remove = (cart, product) => {
  if (inCart(cart, product) === false) {
    throw new ProductNotFound();
  }

  return {
    ...cart,
    products: reject({ id: product.id })(cart.products),
  };
};
