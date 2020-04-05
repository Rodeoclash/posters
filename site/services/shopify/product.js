/**
 * Functions used for dealing with a single product returned from Shopify
 */

import { flow, fromPairs, get, map, pick, tap } from "lodash/fp";

/**
 * Unpack the response returned by Shopify
 */
export const unpackResponse = get("data.productByHandle");

/**
 * Turns a Shopify product into something that can be consumed easily
 */
export const serialise = (product) => ({
  ...pick(["description", "handle", "id", "title"])(product),
  src: product.images.edges[0].node.src,
  metafields: flow(
    get("metafields.edges"),
    map("node"),
    map((metadatum) => [metadatum.key, metadatum.value]),
    fromPairs
  )(product),
});
