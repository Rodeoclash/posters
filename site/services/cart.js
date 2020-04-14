export class ProductNotFound extends Error {}
export class ProductExists extends Error {}

const productMatch = (product1, product2) => {
  return product1.id === product2.id;
};

const productNoMatch = (product1, product2) => {
  return !productMatch(product1, product2);
};

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
  return cart.products.some(productMatch.bind(this, product));
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
    products: cart.products.filter(productNoMatch.bind(this, product)),
  };
};
