import Client from 'shopify-buy';

const domain = 'waitawa-posters.myshopify.com';
const storefrontAccessToken = '7b2d5b130d19dd191f4c6b61e5a2b244';

export const buildClient = () => {
  return Client.buildClient({
    domain,
    storefrontAccessToken,
  });
};

export const serialiseProducts = (products) => {
  return products.map((product) => {
    return {
      id: product.id,
      title: product.title,
      src: product.images[0].src,
      description: product.description,
      handle: product.handle,
    }
  });
}

export const serialiseProduct = (product) => {
  return {
    id: product.id,
    title: product.title,
    src: product.images[0].src,
    description: product.description,
    handle: product.handle,
  }
}
