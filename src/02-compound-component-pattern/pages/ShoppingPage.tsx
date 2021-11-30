import React from "react";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/index";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "coffee-mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage />
          <ProductTitle className="text-white" />
          <ProductButtons className="text-white" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#ad7878" }}>
          <ProductImage />
          <ProductTitle className="text-white" />
          <ProductButtons className="text-white" />
        </ProductCard>
      </div>
    </div>
  );
};
