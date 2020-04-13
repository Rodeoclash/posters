import Link from "next/link";

const ProductLink = ({ product, children }) => (
  <Link href="/posters/[slug]" as={`/posters/${product.handle}`}>
    <a>{children}</a>
  </Link>
);

export default ProductLink;
