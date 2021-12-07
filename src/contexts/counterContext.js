import { createContext } from "react";
import { useState } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const value = {
    counter,
    setCounter,
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
