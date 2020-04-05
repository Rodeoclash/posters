/**
 * Functions used for dealing with a list of products returned from Shopify.
 */

import { flow, fromPairs, get, map, pick } from "lodash/fp";

import { serialise as serialiseProduct } from "./product";

/**
 * Unpack the response returned by Shopify
 */
export const unpackResponse = flow(get("data.products.edges"), map("node"));

/**
 * Turns the product list into something that can be serialised to the frontend
 */
export const serialise = map(serialiseProduct);

/**
 * Given a list of products, produce a list of internal urls
 */
export const detailPageUrls = map((product) => `/posters/${product.handle}`);
