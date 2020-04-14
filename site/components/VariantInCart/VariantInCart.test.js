import React from "react";
import renderer from "react-test-renderer";

import * as CartContext from "../../contexts/cart";
import VariantInCart from "./VariantInCart";

describe("snapshots", () => {
  it("with variant in the cart", () => {
    const variant = {};

    const contextValues = {
      contains() {
        return true;
      },
    };

    jest
      .spyOn(CartContext, "useCartContext")
      .mockImplementation(() => contextValues);

    const tree = renderer.create(<VariantInCart variant={variant} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("with variant not in the cart", () => {
    const variant = {};

    const contextValues = {
      contains() {
        return false;
      },
    };

    jest
      .spyOn(CartContext, "useCartContext")
      .mockImplementation(() => contextValues);

    const tree = renderer.create(<VariantInCart variant={variant} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
