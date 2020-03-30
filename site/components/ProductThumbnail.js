import Link from "next/link";

import ProductAddToCart from "../components/ProductAddToCart";
import ProductLink from "../components/ProductLink";

const ProductThumbnail = ({ product }) => (
  <dl>
    <dt>Image</dt>
    <dd>
      <img src={product.src} />
    </dd>
    <dt>Title</dt>
    <dd>{product.title}</dd>
    <dt>Description</dt>
    <dd>{product.description}</dd>
    <dt>Link</dt>
    <dd>
      <ProductLink product={product} />
    </dd>
    <dt>Actions</dt>
    <dd>
      <ProductAddToCart product={product} />
    </dd>
  </dl>
);

export default ProductThumbnail;
