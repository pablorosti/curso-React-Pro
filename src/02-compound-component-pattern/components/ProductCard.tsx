import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Props } from "../interfaces/IProduct";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard: React.FC<Props> = ({
  children,
  product,
  className,
  style,
}) => {
  const { counter, handleCounterclick } = useProduct();

  return (
    <Provider value={{ counter, handleCounterclick, product }}>
      <div className={`productCard ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
