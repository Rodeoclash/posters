import { flow } from "lodash/fp";

import { buildClient, serialiseProducts } from "../services/shopify";
import { products as productsQuery } from "../services/shopify/queries";
import { unpackResponse, serialise } from "../services/shopify/products";

import Cart from "../components/Cart";
import Head from "next/head";
import Products from "../components/Products";

import styles from "./index.module.css";

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
    <div className={styles.root}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Scientific Posters</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.wrapper}>
        <main className={styles.shop}>
          <h1>Scientific Posters</h1>
          <h2>Products</h2>
          <Products products={products} />
        </main>

        <aside className={styles.cart}>
          <Cart />
        </aside>
      </div>
    </div>
  );
};

export default Home;
