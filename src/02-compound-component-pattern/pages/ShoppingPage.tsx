import React, { useState } from "react";
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
      <div>
        <ProductCard product={product} className="bg-dark" key={product.id}>
          <ProductImage />
          <ProductTitle className="text-white" />
          <ProductButtons className="text-white" />
        </ProductCard>
      </div>
    </div>
  );
};
