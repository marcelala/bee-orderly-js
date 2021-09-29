import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ListContextProvider } from "./context/ListContext";
import index from "./styles/sass/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ListContextProvider>
      <App />
    </ListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
