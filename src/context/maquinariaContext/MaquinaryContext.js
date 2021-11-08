import { createContext, useReducer } from "react";
import { MaquinaryReducer } from "./MaquinaryReducer";

const INITIAL_STATE = {
  maquinarys: [],
  isFetching: false,
  error: false,
};

export const MaquinaryContext = createContext(INITIAL_STATE);

export const MaquinaryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MaquinaryReducer, INITIAL_STATE);

  return (
    <MaquinaryContext.Provider
      value={{
        maquinarys: state.maquinarys,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MaquinaryContext.Provider>
  );
};
