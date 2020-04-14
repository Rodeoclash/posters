import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";

import * as CartContext from "../../contexts/cart";
import CartVariantRemove from "./CartVariantRemove";

describe("onClick", () => {
  it("calls function to remove variant from cart", () => {
    const variant = {};
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

    const { getByText } = render(<CartVariantRemove variant={variant} />);

    fireEvent.click(getByText("Remove"));

    expect(remove).toHaveBeenCalledWith(variant, expect.anything());
  });
});

describe("snapshots", () => {
  it("with variant in the cart", () => {
    const variant = {};
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
      .create(<CartVariantRemove variant={variant} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("with variant not in the cart", () => {
    const variant = {};
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
      .create(<CartVariantRemove variant={variant} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
