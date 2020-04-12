import { flow } from "lodash/fp";

import { buildClient } from "../../services/shopify";
import {
  unpackResponse as unpackResponseProducts,
  detailPageUrls,
} from "../../services/shopify/products";
import {
  unpackResponse as unpackResponseProduct,
  serialise,
} from "../../services/shopify/product";
import {
  products as productsQuery,
  product as productQuery,
} from "../../services/shopify/queries";

import Cart from "../../components/Cart";
import Head from "next/head";
import Content from "../../components/UI/Content";
import ProductDetail from "../../components/ProductDetail";

export async function getStaticPaths() {
  const client = buildClient();
  const result = await client.graphQLClient.send(productsQuery(client));

  const paths = flow(unpackResponseProducts, detailPageUrls)(result);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const client = buildClient();
  const result = await client.graphQLClient.send(
    productQuery(client, params.slug)
  );

  const product = flow(unpackResponseProduct, serialise)(result);

  return {
    props: {
      product,
    },
  };
}

const Product = ({ product }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={product.metafields.description} />
        <title>{product.metafields.title}</title>
      </Head>

      <Content>
        <ProductDetail product={product} />
      </Content>
    </>
  );
};

export default Product;
