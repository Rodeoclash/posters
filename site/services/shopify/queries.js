/**
 * Fields shared on product queries
 */
const fields = (product) => {
  product.add("id");
  product.add("description");
  product.add("handle");
  product.add("title");

  product.addConnection("metafields", { args: { first: 20 } }, (meta) => {
    meta.add("id");
    meta.add("key");
    meta.add("value");
  });

  product.addConnection("images", { args: { first: 3 } }, (meta) => {
    meta.add("id");
    meta.add("src");
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
