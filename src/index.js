import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CounterReducer from "./Reducers/CounterReducers";

const store = createStore(CounterReducer); // combineReducer() daca vrem mai multe functii sa transmitem

console.log("Store:", store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
