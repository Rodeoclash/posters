import { buildClient, unpackEdges } from "../../services/shopify";

import {
  products as productsQuery,
  product as productQuery,
} from "../../services/shopify/queries";

import Cart from "../../components/Cart";
import Content from "../../components/UI/Content";
import Head from "next/head";
import ProductDetail from "../../components/ProductDetail";

import React from 'react';
import { NextSeo, BreadcrumbJsonLd, ImageJsonLd } from 'next-seo';

export async function getStaticPaths() {
  const client = buildClient();
  const productsData = await client.graphQLClient.send(productsQuery(client));
  const products = productsData.data.products.edges.map(unpackEdges);
  const paths = products.map((product) => `/posters/${product.handle}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const client = buildClient();
  const productData = await client.graphQLClient.send(
    productQuery(client, params.slug)
  );

  return {
    props: {
      productData: JSON.stringify(productData),
    },
  };
}

const Product = ({ productData }) => {
  const product = JSON.parse(productData).data.productByHandle;

  return (
    <>
      <NextSeo title={product.title} description={product.description} />
      <BreadcrumbJsonLd
        itemListElements = {[
          {
            position: 1,
            name: 'Posters',
            item: 'https://posters.com/posters'    
          }
        ]}
      />
      <ImageJsonLd
        url="https://posters.com/poster/poster.jpg"
        license="https://posters.com/imageLicense"
        acquireLicensePage="https://posters.com/acquireLicensePage"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800"
          rel="stylesheet"
        />
      </Head>

      <Content breadcrumb={product.title}>
        <ProductDetail product={product} />
      </Content>
    </>
  );
};

export default Product;