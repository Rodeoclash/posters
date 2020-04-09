import ProductLink from "../ProductLink";

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
