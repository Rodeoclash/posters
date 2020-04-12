import React from "react";
import renderer from "react-test-renderer";
import { product } from "../../support/fixtures";

import CartProvider from "../../providers/Cart";
import ProductDetail from "./ProductDetail";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <CartProvider>
        <ProductDetail product={product} />
      </CartProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
