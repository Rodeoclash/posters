import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";

import * as CartContext from "../../contexts/cart";
import CartProductRemove from "./CartProductRemove";

describe("onClick", () => {
  it("calls function to remove product from cart", () => {
    const product = {};
    const remove = jest.fn();

    const contextValues = {
      contains() {
        return true;
      },
      remove,
    };

    jest
      .spyOn(CartContext, "useCartContext")
      .mockImplementation(() => contextValues);

    const { getByText } = render(<CartProductRemove product={product} />);

    fireEvent.click(getByText("Remove product"));

    expect(remove).toHaveBeenCalledWith(product, expect.anything());
  });
});

describe("snapshots", () => {
  it("with product in the cart", () => {
    const product = {};
    const remove = jest.fn();

    const contextValues = {
      contains() {
        return true;
      },
      remove,
    };

    jest
      .spyOn(CartContext, "useCartContext")
      .mockImplementation(() => contextValues);

    const tree = renderer
      .create(<CartProductRemove product={product} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("with product not in the cart", () => {
    const product = {};
    const remove = jest.fn();

    const contextValues = {
      contains() {
        return false;
      },
      remove,
    };

    jest
      .spyOn(CartContext, "useCartContext")
      .mockImplementation(() => contextValues);

    const tree = renderer
      .create(<CartProductRemove product={product} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
