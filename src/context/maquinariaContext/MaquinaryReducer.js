export const MaquinaryReducer = (state, action) => {
  switch (action.type) {
    case "GET_MAQUINARYS_START":
      return {
        maquinarys: [],
        isFetching: true,
        error: false,
      };

    case "GET_MAQUINARYS_SUCCESS":
      return {
        maquinarys: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_MAQUINARYS_FAILURE":
      return {
        maquinarys: [],
        isFetching: false,
        error: true,
      };
    default: {
      return { ...state };
    }
  }
};
