import React from "react";
import renderer from "react-test-renderer";
import { products } from "../support/fixtures";

import ProductThumbnail from "./ProductThumbnail";

it("renders correctly", () => {
  const tree = renderer
    .create(<ProductThumbnail product={products[0]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
