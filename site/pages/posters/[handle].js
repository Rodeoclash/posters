import { buildClient } from "../../services/shopify";

import Cart from "../../components/Cart";
import Content from "../../components/UI/Content";
import Head from "next/head";
import ProductDetail from "../../components/ProductDetail";

export async function getStaticPaths() {
  const client = buildClient();
  const products = await client.product.fetchAll();
  const paths = products.map((product) => `/posters/${product.handle}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const client = buildClient();

  const productData = await client.product.fetchByHandle(params.handle)

  return {
    props: {
      productData: JSON.stringify(productData),
    },
  };
}

const Product = ({ productData }) => {
  const product = JSON.parse(productData);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
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
