import { useState } from "react";
import { InitialValues } from "../interfaces/IProduct";

export const useProduct = (initialValues?: InitialValues) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || 0);

  const handleCounterclick = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);
  };
  return { counter, handleCounterclick };
};
