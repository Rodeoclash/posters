import 'isomorphic-unfetch';

import Head from 'next/head'
import { buildClient, serialiseProduct } from '../../services/shopify';

import ProductThumbnail from '../../components/ProductThumbnail'

export async function getStaticProps(params) {
  const client = buildClient();

  const product = await client.product.fetch("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ4MjQyODI5ODg1ODk=");

  return {
    props: {
      product: serialiseProduct(product),
    }
  }
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
      `}</style>
    </div>
  )

}

export default Product
