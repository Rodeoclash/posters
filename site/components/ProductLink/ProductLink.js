import { useContext } from "react";

import Link from "next/link";

const ProductLink = ({ product, children }) => (
  <Link href="/posters/[slug]" as={`/posters/${product.handle}`}>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      View
    </button>
  </Link>
);

export default ProductLink;
