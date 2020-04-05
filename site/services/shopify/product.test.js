import { flow } from "lodash/fp";
import { unpackResponse, serialise } from "./product";
import response from "../../support/fixtures/shopify/product.json";

const product = {
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

test("serialise", () => {
  const result = flow(unpackResponse, serialise)(response);

  expect(result).toStrictEqual(product);
});
