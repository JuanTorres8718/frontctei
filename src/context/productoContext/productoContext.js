import { createContext, useReducer } from "react";
import ProductoReducer from "./ProductoReducer";

const INITIAL_STATE = {
  products: [],
  isFetching: false,
  error: false,
};

export const ProductoContext = createContext(INITIAL_STATE);

export const ProductoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductoReducer, INITIAL_STATE);

  return (
    <ProductoContext.Provider
      value={{
        products: state.products,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};
