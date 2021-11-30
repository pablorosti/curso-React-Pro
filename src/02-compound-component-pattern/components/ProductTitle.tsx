import { useContext } from "react";
import { ProductContext } from "./ProductCard";

interface Styles {
  className?: string;
}

export const ProductTitle: React.FC<Styles> = ({ className }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`productDescription ${className}`}>{product.title}</span>
  );
};
