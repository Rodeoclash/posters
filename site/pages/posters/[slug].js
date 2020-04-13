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
import Content from "../../components/UI/Content";
import Head from "next/head";
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
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800"
          rel="stylesheet"
        />
      </Head>

      <Content>
        <ProductDetail product={product} />
      </Content>
    </>
  );
};

export default Product;
