import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ListContextProvider } from "./context/list/ListContext";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <ListContextProvider>
      <App />
    </ListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
