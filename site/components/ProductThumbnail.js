const ProductThumbnail = ({ product }) => (
  <dl>
    <dt>Image</dt>
    <dd>
      <img src={product.src} />
    </dd>
    <dt>Title</dt>
    <dd>
      {product.title}
    </dd>
    <dt>Description</dt>
    <dd>
      {product.description}
    </dd>
  </dl>
);

export default ProductThumbnail;
