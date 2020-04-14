import {
  ProductExists,
  ProductNotFound,
  add,
  hide,
  contains,
  show,
  remove,
} from "./cart";

describe("show", () => {
  it("when cart not showing", () => {
    const cart = {
      showing: false,
    };

    const result = show(cart);

    expect(result).toStrictEqual({
      showing: true,
    });
  });

  it("when cart showing", () => {
    const cart = {
      showing: true,
    };

    const result = show(cart);

    expect(result).toStrictEqual({
      showing: true,
    });
  });
});

describe("hide", () => {
  it("when cart not showing", () => {
    const cart = {
      showing: false,
    };

    const result = hide(cart);

    expect(result).toStrictEqual({
      showing: false,
    });
  });

  it("when cart showing", () => {
    const cart = {
      showing: true,
    };

    const result = hide(cart);

    expect(result).toStrictEqual({
      showing: false,
    });
  });
});

describe("contains", () => {
  it("true when in cart", () => {
    const cart = {
      products: [{ id: "1" }],
    };

    const result = contains(cart, { id: "1" });

    expect(result).toEqual(true);
  });

  it("false when not in cart", () => {
    const cart = {
      products: [],
    };

    const result = contains(cart, { id: "1" });

    expect(result).toEqual(false);
  });
});

describe("add", () => {
  it("raises if product exists", () => {
    const cart = {
      products: [{ id: "1" }],
      showing: false,
    };

    expect(() => {
      add(cart, { id: "1" });
    }).toThrow(ProductExists);
  });

  it("adds when empty", () => {
    const cart = {
      products: [],
      showing: false,
    };

    const result = add(cart, { id: "1" });

    expect(result).toStrictEqual({
      products: [{ id: "1" }],
      showing: true,
    });
  });
});

describe("remove", () => {
  it("raises if product not found", () => {
    const cart = {
      products: [],
      showing: false,
    };

    expect(() => {
      remove(cart, { id: "1" });
    }).toThrow(ProductNotFound);
  });

  it("removes when found", () => {
    const cart = {
      products: [{ id: "1" }],
      showing: false,
    };

    const result = remove(cart, { id: "1" });

    expect(result).toStrictEqual({
      products: [],
      showing: true,
    });
  });
});
