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

    case "EDIT_MAQUINARY_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "EDIT_MAQUINARY_SUCCESS":
      return {
        maquinarys: state.maquinarys.map(
          (maquinary) =>
            maquinary.codigo_equipo === action.payload.codigo_equipo &&
            action.payload
        ),
        isFetching: false,
        error: false,
      };

    case "EDIT_MAQUINARY_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default: {
      return { ...state };
    }
  }
};
