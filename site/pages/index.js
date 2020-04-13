import { buildClient, unpackEdges } from "../services/shopify";
import { products as productsQuery } from "../services/shopify/queries";

import Content from "../components/UI/Content";
import Head from "next/head";
import ProductGrid from "../components/ProductGrid";

export async function getStaticProps() {
  const client = buildClient();
  const products = await client.graphQLClient.send(productsQuery(client));

  return {
    props: {
      productsData: JSON.stringify(products),
    },
  };
}

const Home = ({ productsData }) => {
  const products = JSON.parse(productsData).data.products.edges.map(
    unpackEdges
  );

  const breadcrumbs = [];

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
        <ProductGrid products={products} />
      </Content>
    </>
  );
};

export default Home;
