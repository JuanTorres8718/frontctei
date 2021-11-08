import { createContext, useReducer } from "react";
import { TalentReducer } from "./TalentReducer";

const INITIAL_STATE = {
  talents: [],
  isFetching: false,
  error: false,
};

export const TalentContext = createContext(INITIAL_STATE);

export const TalentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TalentReducer, INITIAL_STATE);

  return (
    <TalentContext.Provider
      value={{
        talents: state.talents,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </TalentContext.Provider>
  );
};
