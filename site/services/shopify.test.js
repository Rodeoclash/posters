import { serialiseProducts, serialiseProduct } from "./shopify";
import { shopifyProducts, products } from "../support/fixtures";

test("serialiseProducts", () => {
  expect(serialiseProducts(shopifyProducts)).toStrictEqual(products);
});

test("serialiseProduct", () => {
  expect(serialiseProduct(shopifyProducts[0])).toStrictEqual(products[0]);
});
