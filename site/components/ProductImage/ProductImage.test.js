import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import ProductImage from "./ProductImage";

it("renders correctly", () => {
  const product = {
    images: {
      edges: [
        {
          node: {
            src: "src",
          },
        },
      ],
    },
  };

  const renderer = new ShallowRenderer();

  renderer.render(<ProductImage product={product} />);

  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
