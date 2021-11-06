import { createContext, useReducer } from "react";
import TsReducer from "./TsReducer";

const INITIAL_STATE = {
  tables: {},
  isFetching: false,
  error: false,
};

export const TsContext = createContext(INITIAL_STATE);

export const TsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TsReducer, INITIAL_STATE);

  return (
    <TsContext.Provider
      value={{
        tables: state.tables,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </TsContext.Provider>
  );
};
