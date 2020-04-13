import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import ProductPreview from "./ProductPreview";

it("renders correctly", () => {
  const product = {
    title: "title",
  };

  const renderer = new ShallowRenderer();

  renderer.render(<ProductPreview product={product} />);

  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
