import 'isomorphic-unfetch';

import Head from 'next/head'
import { buildClient, serialiseProducts } from '../services/shopify';

import ProductThumbnail from '../components/ProductThumbnail'

export async function getStaticProps() {
  const client = buildClient();

  const products = await client.product.fetchAll();

  return {
    props: {
      products: serialiseProducts(products),
    }
  }
}

const Home = ({ products }) => {
  const renderedProducts = products.map((product) => (
    <React.Fragment key={product.id}>
      <ProductThumbnail product={product} />
      <hr />
    </React.Fragment>
  ));

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {renderedProducts}
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

export default Home
