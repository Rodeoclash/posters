import { useContext } from "react";

import CartContext from "../contexts/cart";

import ProductThumbnail from "../components/ProductThumbnail";

const Products = ({ products }) => {
  const renderedProducts = products.map((product) => (
    <React.Fragment key={product.id}>
      <ProductThumbnail product={product} />
    </React.Fragment>
  ));

  return <>{renderedProducts}</>;
};

export default Products;
