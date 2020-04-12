import { flow } from "lodash/fp";

import { buildClient, serialiseProducts } from "../services/shopify";
import { products as productsQuery } from "../services/shopify/queries";
import { unpackResponse, serialise } from "../services/shopify/products";

import Head from "next/head";
import Content from "../components/UI/Content";
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
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Scientific Posters</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800"
          rel="stylesheet"
        />
      </Head>

      <Content>
        <Products products={products} />
      </Content>
    </>
  );
};

export default Home;
