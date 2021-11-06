import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TsContextProvider } from "./context/tableSecundaryContext/TsContext";

ReactDOM.render(
  <React.StrictMode>
    <TsContextProvider>
      <App />
    </TsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
