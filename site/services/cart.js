export class VariantNotFound extends Error {}
export class VariantExists extends Error {}

const variantMatch = (variant1, variant2) => {
  return variant1.id === variant2.id;
};

const variantNoMatch = (variant1, variant2) => {
  return !variantMatch(variant1, variant2);
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

export const contains = (cart, variant) => {
  return cart.variants.some(variantMatch.bind(this, variant));
};

export const add = (cart, variant) => {
  if (contains(cart, variant) === true) {
    throw new VariantExists();
  }

  return {
    ...show(cart),
    variants: cart.variants.concat([variant]),
  };
};

export const remove = (cart, variant) => {
  if (contains(cart, variant) === false) {
    throw new VariantNotFound();
  }

  return {
    ...show(cart),
    variants: cart.variants.filter(variantNoMatch.bind(this, variant)),
  };
};
