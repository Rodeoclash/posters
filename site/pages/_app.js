import "isomorphic-unfetch";

import CartProvider from "../providers/cart";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
