import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import ProductDetail from "./ProductDetail";

it("renders correctly", () => {
  const product = {
    title: "title",
    description: "{}",
    variants: {
      edges: [
        {
          node: {},
        },
      ],
    },
  };

  const renderer = new ShallowRenderer();

  renderer.render(<ProductDetail product={product} />);

  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
