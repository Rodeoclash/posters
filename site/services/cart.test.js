import { inCart, add, remove, ProductNotFound, ProductExists } from "./cart";

describe("inCart", () => {
  it("true when in cart", () => {
    const cart = {
      products: [{ id: "1" }],
    };

    const result = inCart(cart, { id: "1" });

    expect(result).toEqual(true);
  });

  it("false when not in cart", () => {
    const cart = {
      products: [],
    };

    const result = inCart(cart, { id: "1" });

    expect(result).toEqual(false);
  });
});

describe("add", () => {
  it("raises if product exsts", () => {
    const cart = {
      products: [{ id: "1" }],
    };

    expect(() => {
      add(cart, { id: "1" });
    }).toThrow(ProductExists);
  });

  it("adds when empty", () => {
    const cart = {
      products: [],
    };

    const result = add(cart, { id: "1" });

    expect(result).toStrictEqual({
      products: [{ id: "1" }],
    });
  });
});

describe("remove", () => {
  it("raises if product not found", () => {
    const cart = {
      products: [],
    };

    expect(() => {
      remove(cart, { id: "1" });
    }).toThrow(ProductNotFound);
  });

  it("removes when found", () => {
    const cart = {
      products: [{ id: "1" }],
    };

    const result = remove(cart, { id: "1" });

    expect(result).toStrictEqual({
      products: [],
    });
  });
});
