import { ReactElement } from "react";

export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  initialValues?: InitialValues;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  handleCounterclick: (value: number) => void;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}
