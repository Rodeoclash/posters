import React from "react";
import renderer from "react-test-renderer";

import * as CartContext from "../../contexts/cart";
import ProductInCart from "./ProductInCart";

describe("snapshots", () => {
  it("with product in the cart", () => {
    const product = {};

    const contextValues = {
      productInCart() {
        return true;
      },
    };

    jest
      .spyOn(CartContext, "useCartContext")
      .mockImplementation(() => contextValues);

    const tree = renderer.create(<ProductInCart product={product} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("with product not in the cart", () => {
    const product = {};

    const contextValues = {
      productInCart() {
        return false;
      },
    };

    jest
      .spyOn(CartContext, "useCartContext")
      .mockImplementation(() => contextValues);

    const tree = renderer.create(<ProductInCart product={product} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
