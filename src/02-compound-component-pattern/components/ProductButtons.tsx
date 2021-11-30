import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductButtons = () => {
  const { handleCounterclick, counter } = useContext(ProductContext);
  return (
    <div className="buttonsContainer">
      <button onClick={() => handleCounterclick(-1)} className="buttonMinus">
        -
      </button>
      <div className="countLabel">{counter}</div>
      <button onClick={() => handleCounterclick(+1)} className="buttonAdd">
        +
      </button>
    </div>
  );
};
