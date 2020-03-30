import Client from "shopify-buy";

import { pick, map } from "lodash/fp";

const domain = "waitawa-posters.myshopify.com";
const storefrontAccessToken = "7b2d5b130d19dd191f4c6b61e5a2b244";

export const buildClient = () => {
  return Client.buildClient({
    domain,
    storefrontAccessToken,
  });
};

/**
 * Given a product, transform it into an object that can be serialised.
 */
export const serialiseProduct = (product) => ({
  ...pick(["description", "id", "title"])(product),
  src: product.images[0].src,
});

/**
 * Given a list of products, transform it into an object that can be serialised.
 */
export const serialiseProducts = map(serialiseProduct);
