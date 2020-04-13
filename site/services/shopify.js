import Client from "shopify-buy/index.unoptimized.umd";

const domain = "waitawa-posters.myshopify.com";
const storefrontAccessToken = "7b2d5b130d19dd191f4c6b61e5a2b244";

export const buildClient = () => {
  return Client.buildClient({
    domain,
    storefrontAccessToken,
  });
};

export const unpackEdges = (edge) => {
  return edge.node;
};
