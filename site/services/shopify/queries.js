/**
 * Fields shared on product queries
 */
const fields = (product) => {
  product.add("id");
  product.add("description");
  product.add("handle");
  product.add("title");

  product.addConnection("metafields", { args: { first: 20 } }, (metafields) => {
    metafields.add("id");
    metafields.add("key");
    metafields.add("value");
  });

  product.addConnection("images", { args: { first: 3 } }, (images) => {
    images.add("id");
    images.add("src");
  });

  product.addConnection("variants", { args: { first: 1 } }, (variants) => {
    variants.add("id");
    variants.add("title");
    variants.add("priceV2", (priceV2) => {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    variants.add("product", (product) => {
      product.add("id");
      product.add("description");
      product.add("handle");
      product.add("title");
    });
  });

  return product;
};

export const products = (client) => {
  return client.graphQLClient.query((root) => {
    root.addConnection("products", { args: { first: 30 } }, (product) =>
      fields(product)
    );
  });
};

export const product = (client, handle) => {
  return client.graphQLClient.query((root) => {
    root.add("productByHandle", { args: { handle } }, (product) =>
      fields(product)
    );
  });
};
