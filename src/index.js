import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MaquinaryContextProvider } from "./context/maquinariaContext/MaquinaryContext";
import { ProductoContextProvider } from "./context/productoContext/ProductoContext";
import { ProyectoContextProvider } from "./context/proyectoContext/proyectoContext";
import { TsContextProvider } from "./context/tableSecundaryContext/TsContext";
import { TalentContextProvider } from "./context/talentoContext/TalentContext";

ReactDOM.render(
  <React.StrictMode>
    <ProyectoContextProvider>
      <ProductoContextProvider>
        <TalentContextProvider>
          <MaquinaryContextProvider>
            <TsContextProvider>
              <App />
            </TsContextProvider>
          </MaquinaryContextProvider>
        </TalentContextProvider>
      </ProductoContextProvider>
    </ProyectoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
