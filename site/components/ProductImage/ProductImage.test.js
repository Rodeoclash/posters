import React from "react";
import renderer from "react-test-renderer";

import ProductImage from "./ProductImage";

it("renders correctly", () => {
  const product = {
    src: "src",
  };

  const tree = renderer.create(<ProductImage product={product} />).toJSON();

  expect(tree).toMatchSnapshot();
});
