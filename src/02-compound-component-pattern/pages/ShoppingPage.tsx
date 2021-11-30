import React from "react";
import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';

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
          <ProductImage  />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
