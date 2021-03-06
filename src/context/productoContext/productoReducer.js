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

    case "UPDATE_PRODUCT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        products: state.products.map(
          (product) =>
            product.codigo_productos === action.payload.codigo_productos &&
            action.payload
        ),
        isFetching: false,
        error: false,
      };

    case "UPDATE_PRODUCT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default ProductoReducer;
