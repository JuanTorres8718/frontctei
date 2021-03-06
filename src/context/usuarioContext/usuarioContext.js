import UsuarioReducer from "./UsuarioReducer";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  users: [],
  isFetching: false,
  error: false,
};

export const UsuarioContext = createContext(INITIAL_STATE);

export const UsuarioContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UsuarioReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <UsuarioContext.Provider
      value={{
        users: state.users,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
