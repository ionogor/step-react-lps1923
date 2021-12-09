import { useContext } from "react";
import { CounterContext } from "./contexts/counterContext";
import { INCREMENT, DECREMENT } from "./contexts/counterContext";

function App() {
  const { counter, dispatch } = useContext(CounterContext);
  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT });
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
