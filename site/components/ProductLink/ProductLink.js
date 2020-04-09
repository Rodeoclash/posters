import { useContext } from "react";

import Link from "next/link";

const ProductLink = ({ product, children }) => (
  <Link href="/posters/[slug]" as={`/posters/${product.handle}`}>
    <a>View</a>
  </Link>
);

export default ProductLink;
