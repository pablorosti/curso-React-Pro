import { useContext } from "react";
import { ProductContext } from "./ProductCard";

interface Props {
  className?: string;
}
export const ProductButtons: React.FC<Props> = ({ className }) => {
  const { handleCounterclick, counter } = useContext(ProductContext);
  return (
    <div className="buttonsContainer">
      <button
        onClick={() => handleCounterclick(-1)}
        className={`buttonMinus ${className}`}
      >
        -
      </button>
      <div className={`countLabel ${className}`}>{counter}</div>
      <button
        onClick={() => handleCounterclick(+1)}
        className={`buttonAdd ${className}`}
      >
        +
      </button>
    </div>
  );
};
