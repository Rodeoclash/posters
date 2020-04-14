import "isomorphic-unfetch";

import CartProvider from "../providers/Cart";

import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../configs/seo.config';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
      <style jsx global>{`
        html,
        body {
          font-family: "Open Sans";
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}

export default MyApp;
