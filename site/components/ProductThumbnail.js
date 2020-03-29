import Link from 'next/link'
import urlSlug from 'url-slug'

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
    <dt>ID</dt>
    <dd>
      {product.id}
    </dd>
    <dt>Link to product page</dt>
    <dd>
      <Link href="/posters/[slug]" as={'/posters/'+urlSlug(product.title)}>
        <a>Link to product page</a>
      </Link>
    </dd>
  </dl>
);

export default ProductThumbnail;
