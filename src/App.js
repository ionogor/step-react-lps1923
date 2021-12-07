import { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "./contexts/counterContext";

function App() {
  const { counter, setCounter } = useContext(CounterContext);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
