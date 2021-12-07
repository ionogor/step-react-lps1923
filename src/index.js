import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CounterProvider from "./contexts/counterContext";

ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
