import "isomorphic-unfetch";

import { flow } from "lodash/fp";

import { buildClient, serialiseProducts } from "../services/shopify";
import { products as productsQuery } from "../services/shopify/queries";
import { unpackResponse, serialise } from "../services/shopify/products";

import Cart from "../components/Cart";
import Head from "next/head";
import ProductThumbnail from "../components/ProductThumbnail";
import Products from "../components/Products";

export async function getStaticProps() {
  const client = buildClient();
  const result = await client.graphQLClient.send(productsQuery(client));

  const products = flow(unpackResponse, serialise)(result);

  return {
    props: {
      products,
    },
  };
}

const Home = ({ products }) => {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Create Next App</title>
      </Head>

      <Cart />

      <h2>Products</h2>
      <Products products={products} />

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

export default Home;
