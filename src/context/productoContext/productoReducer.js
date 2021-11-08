const ProductoReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_START":
      return {
        products: [],
        isFetching: true,
        error: false,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        products: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_PRODUCTS_FAILURE":
      return {
        products: [],
        isFetching: false,
        error: true,
        message: action.error,
      };

    case "CREATE_PRODUCT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_PRODUCT_SUCCESS":
      return {
        products: [...state.products, action.payload],
        isFetching: false,
        error: false,
      };

    case "CREATE_PRODUCT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // case "UPDATE_PROJECT_START":
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };
    // case "UPDATE_PROJECT_SUCCESS":
    //   return {
    //     projects: state.projects.map(
    //       (project) => project._id === action.payload._id && action.payload
    //     ),
    //     isFetching: false,
    //     error: false,
    //   };

    // case "UPDATE_PROJECT_FAILURE":
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };

    // case "DELETE_PROJECT_START":
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };
    // case "DELETE_PROJECT_SUCCESS":
    //   return {
    //     projects: state.projects.filter(
    //       (project) => project._id !== action.payload
    //     ),
    //     isFetching: false,
    //     error: false,
    //   };

    // case "DELETE_PROJECT_FAILURE":
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };

    default:
      return { ...state };
  }
};

export default ProductoReducer;
