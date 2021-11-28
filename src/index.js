import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { EstadisticaContextProvider } from "./context/estadisticaContext/EstadisticaContext";
import { MaquinaryContextProvider } from "./context/maquinariaContext/MaquinaryContext";
import { ProductoContextProvider } from "./context/productoContext/ProductoContext";
import { ProyectoContextProvider } from "./context/proyectoContext/proyectoContext";
import { TsContextProvider } from "./context/tableSecundaryContext/TsContext";
import { TalentContextProvider } from "./context/talentoContext/TalentContext";
import { UsuarioContextProvider } from "./context/usuarioContext/UsuarioContext";

ReactDOM.render(
  <React.Fragment>
    <AuthContextProvider>
      <UsuarioContextProvider>
        <ProyectoContextProvider>
          <ProductoContextProvider>
            <TalentContextProvider>
              <MaquinaryContextProvider>
                <TsContextProvider>
                  <EstadisticaContextProvider>
                    <App />
                  </EstadisticaContextProvider>
                </TsContextProvider>
              </MaquinaryContextProvider>
            </TalentContextProvider>
          </ProductoContextProvider>
        </ProyectoContextProvider>
      </UsuarioContextProvider>
    </AuthContextProvider>
  </React.Fragment>,
  document.getElementById("root")
);
