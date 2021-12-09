import { useSelector, useDispatch } from "react-redux"; // cu primul avem acces la state cu al doilea la dipatch
import { increment, decrement } from "./Actions/CounterActions";
function App() {
  const { counter } = useSelector((state) => state);

  console.log("counter", counter);

  const dispatch = useDispatch();

  console.log("Dispatch", dispatch);

  const handleincrement = () => {
    dispatch(increment());
  };
  const handledecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={handleincrement}>+</button>
      <button onClick={handledecrement}>-</button>
    </div>
  );
}

export default App;
