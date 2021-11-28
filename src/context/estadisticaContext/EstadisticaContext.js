import { createContext, useReducer } from "react";
import EstadisticaReducer from "./EstadisticaReducer";

const INITIAL_STATE = {
  estadisticas: {},
  isFetching: false,
  error: false,
};

export const EstadisticaContext = createContext(INITIAL_STATE);

export const EstadisticaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EstadisticaReducer, INITIAL_STATE);

  return (
    <EstadisticaContext.Provider
      value={{
        estadisticas: state.estadisticas,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </EstadisticaContext.Provider>
  );
};
