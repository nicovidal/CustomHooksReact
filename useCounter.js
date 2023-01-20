import { useState } from "react";

//se proporsiona en est hook para que se cambien los estados para que asi
//sume,resete o reste.

export const useCounter = (initialValue = 10) => {
  
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
