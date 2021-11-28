const EstadisticaReducer = (state, action) => {
  switch (action.type) {
    case "GET_VALUES_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_VALUES_SUCCESS":
      return {
        estadisticas: { ...state.estadisticas, values: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_VALUES_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "GET_CATEGORIES_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_CATEGORIES_SUCCESS":
      return {
        estadisticas: { ...state.estadisticas, categories: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_CATEGORIES_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "GET_VALUEYEAR_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_VALUEYEAR_SUCCESS":
      return {
        estadisticas: { ...state.estadisticas, values: action.payload },
        isFetching: false,
        error: false,
      };

    case "GET_VALUEYEAR_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default EstadisticaReducer;
