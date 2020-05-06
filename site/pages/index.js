import { buildClient } from "../services/shopify";

import Content from "../components/UI/Content";
import Head from "next/head";
import ProductGrid from "../components/ProductGrid";

import React from 'react';
import { NextSeo } from 'next-seo';

import styles from "./index.module.css";

export async function getStaticProps() {
  const client = buildClient();
  const products = await client.product.fetchAll();

  return {
    props: {
      productsData: JSON.stringify(products),
    },
  };
}

const Home = ({ productsData }) => {
  const products = JSON.parse(productsData);

  return (
    <>
      <NextSeo title={'Scientific Posters'} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800"
          rel="stylesheet"
        />
      </Head>

      <Content>
        <ProductGrid products={products}>
          <p className={styles.hero}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </ProductGrid>
      </Content>
    </>
  );
};

export default Home;
