import React from "react";
import renderer from "react-test-renderer";
import { product } from "../../support/fixtures";

import CartProvider from "../../providers/Cart";
import ProductPreview from "./ProductPreview";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <CartProvider>
        <ProductPreview product={product} />
      </CartProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
