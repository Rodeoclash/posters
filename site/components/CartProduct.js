import { useContext } from "react";

import CartContext from "../contexts/cart";

import Link from "next/link";
import ProductLink from "../components/ProductLink";

const CartProduct = ({ product }) => (
  <dl>
    <dt>Image</dt>
    <dd>
      <img src={product.src} width="50" />
    </dd>
    <dt>Title</dt>
    <dd>{product.title}</dd>
    <dt>Description</dt>
    <dd>{product.description}</dd>
    <dt>Link</dt>
    <dd>
      <ProductLink product={product} />
    </dd>
  </dl>
);

export default CartProduct;
