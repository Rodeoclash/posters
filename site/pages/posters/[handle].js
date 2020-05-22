import { buildClient } from "../../services/shopify";

import Cart from "../../components/Cart";
import Content from "../../components/UI/Content";
import Head from "next/head";
import ProductDetail from "../../components/ProductDetail";

import React from 'react';
import { NextSeo, BreadcrumbJsonLd, ImageJsonLd } from 'next-seo';

export async function getStaticPaths() {
  const client = buildClient();
  const products = await client.product.fetchAll();
  const paths = products.map((product) => `/posters/${product.handle}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const client = buildClient();

  const productData = await client.product.fetchByHandle(params.handle);

  return {
    props: {
      productData: JSON.stringify(productData),
    },
  };
}


const Product = ({ productData }) => {
  const product = JSON.parse(productData);
  const productMeta = JSON.parse(product.description);

  return (
    <>
      <NextSeo title={productMeta.title} description={productMeta.description} />
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
        url={product.images[0].src}
        license="https://creativecommons.org/licenses/by/4.0/"
        acquireLicensePage="https://creativecommons.org/licenses/by/4.0/"
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