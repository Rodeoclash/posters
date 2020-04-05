import { flow } from "lodash/fp";
import { unpackResponse, serialise, detailPageUrls } from "./products";
import response from "../../support/fixtures/shopify/products.json";

const product1 = {
  id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ4NTA4MTE5NjEzODk=",
  description:
    "Museum-quality posters made on thick and durable matte paper. Add a wonderful accent to your room and office with these posters that are sure to brighten any environment. • Paper thickness: 10.3 mil • Paper weight: 5.6 oz/y² (192 g/m²) • Giclée printing quality • Opacity: 94%",
  handle: "test-poster-2",
  metafields: {
    description: "Wonderful description for the product (1)",
    title: "And a title for it (1)",
  },
  title: "Test Poster 1",
  src:
    "https://cdn.shopify.com/s/files/1/0380/1713/8733/products/mockup-29dc6c6a.png?v=1585737094",
};

const product2 = {
  id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ4NTA4NTE5MDU1ODE=",
  description:
    "Museum-quality posters made on thick and durable matte paper. Add a wonderful accent to your room and office with these posters that are sure to brighten any environment. • Paper thickness: 10.3 mil • Paper weight: 5.6 oz/y² (192 g/m²) • Giclée printing quality • Opacity: 94%",
  handle: "test-poster-3",
  metafields: {
    description: "Another great description (2)",
    title: "And the other title (2)",
  },
  src:
    "https://cdn.shopify.com/s/files/1/0380/1713/8733/products/mockup-f785ea79.png?v=1585737114",
  title: "Test Poster 2",
};

test("serialise", () => {
  const result = flow(unpackResponse, serialise)(response);

  expect(result).toStrictEqual([product1, product2]);
});

test("detailPageUrls", () => {
  const result = flow(unpackResponse, detailPageUrls)(response);

  expect(result).toStrictEqual([
    "/posters/test-poster-2",
    "/posters/test-poster-3",
  ]);
});
