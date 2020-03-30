import "isomorphic-unfetch";

import Head from "next/head";
import { buildClient, serialiseProducts } from "../services/shopify";

import Cart from "../components/Cart";
import ProductThumbnail from "../components/ProductThumbnail";
import Products from "../components/Products";

export async function getStaticProps() {
  const client = buildClient();

  const products = await client.product.fetchAll();

  return {
    props: {
      products: serialiseProducts(products),
    },
  };
}

const Home = ({ products }) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
