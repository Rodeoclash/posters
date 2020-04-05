import "isomorphic-unfetch";

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
import ProductThumbnail from "../../components/ProductThumbnail";

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
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={product.metafields.description} />
        <title>{product.metafields.title}</title>
      </Head>

      <Cart />

      <main>
        <ProductThumbnail product={product} />
      </main>

      <style jsx>{`
        .container {
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Product;
