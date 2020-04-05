import React from "react";
import renderer from "react-test-renderer";
import { product } from "../support/fixtures";

import ProductThumbnail from "./ProductThumbnail";

it("renders correctly", () => {
  const tree = renderer.create(<ProductThumbnail product={product} />).toJSON();

  expect(tree).toMatchSnapshot();
});
