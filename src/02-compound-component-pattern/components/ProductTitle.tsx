import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductTitle = () => {
  const { product } = useContext(ProductContext);
  return <span className="productDescription">{product.title}</span>;
};
