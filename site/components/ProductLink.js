import { useContext } from "react";

import Link from "next/link";

const ProductLink = ({ product }) => (
  <Link href="/posters/[slug]" as={`/posters/${product.handle}`}>
    <a>Link to product page</a>
  </Link>
);

export default ProductLink;
