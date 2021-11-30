import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";

export const ProductImage = () => {
  const { product } = useContext(ProductContext);
  return (
    <img
      className="productImg"
      src={product.img ? product.img : noImage}
      alt=""
    />
  );
};
