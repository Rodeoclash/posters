import "isomorphic-unfetch";

import Head from "next/head";
import {
  buildClient,
  serialiseProducts,
  serialiseProduct,
} from "../../services/shopify";

import ProductThumbnail from "../../components/ProductThumbnail";

export async function getStaticPaths(params) {
  const client = buildClient();

  const res = await client.product.fetchAll();
  const products = serialiseProducts(res);

  const paths = products.map((product) => `/posters/${product.handle}`);

  return { paths, fallback: false };
}

export async function getStaticProps(params) {
  const client = buildClient();

  const product = await client.product.fetchByHandle(params.params.slug);

  return {
    props: {
      product: serialiseProduct(product),
    },
  };
}

const Product = ({ product }) => {
  return (
    <div className="container">
      <Head>
        <title>Product Page for {product.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
