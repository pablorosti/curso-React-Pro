import React, { useState } from "react";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/index";
import "../styles/custom-styles.css";
import { Product } from "../interfaces/IProduct";

const product = {
  id: "1",
  title: "coffee-mug",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "coffee-mug 2",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({
    "1": { ...product, count: 10 },
    "2": { ...product2, count: 2 },
  });

  console.log(shoppingCart);
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
        {products.map((product) => (
          <ProductCard product={product} className="bg-dark" key={product.id}>
            <ProductImage />
            <ProductTitle className="text-white" />
            <ProductButtons className="text-white" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard
          product={product2}
          className="bg-dark"
          style={{ width: "100px" }}
        >
          <ProductImage />
          <ProductButtons className="text-white" />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark"
          style={{ width: "100px" }}
        >
          <ProductImage />
          <ProductButtons className="text-white" />
        </ProductCard>
      </div>
    </div>
  );
};
