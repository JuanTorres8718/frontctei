import { createContext, useReducer } from "react";
import ProyectoReducer from "./proyectoReducer";

const INITIAL_STATE = {
  projects: [],
  isFetching: false,
  error: false,
  message: "",
};

export const ProyectoContext = createContext(INITIAL_STATE);

export const ProyectoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProyectoReducer, INITIAL_STATE);

  return (
    <ProyectoContext.Provider
      value={{
        projects: state.projects,
        isFetching: state.isFetching,
        error: state.error,
        message: state.message,
        dispatch,
      }}
    >
      {children}
    </ProyectoContext.Provider>
  );
};
