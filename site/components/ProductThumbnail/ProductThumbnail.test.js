import React from "react";
import renderer from "react-test-renderer";
import { product } from "../../support/fixtures";

import CartProvider from "../../providers/Cart";
import ProductThumbnail from "./ProductThumbnail";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <CartProvider>
        <ProductThumbnail product={product} />
      </CartProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
