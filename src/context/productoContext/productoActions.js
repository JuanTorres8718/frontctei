//Obtener todos los productos

export const getProductstStart = () => ({
  type: "GET_PRODUCTS_START",
});

export const getProductsSuccess = (product) => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload: product,
});

export const getProductsFailure = () => ({
  type: "GET_PRODUCTS_FAILURE",
});

//Crear producto

export const createProductStart = () => ({
  type: "CREATE_PRODUCT_START",
});

export const createProductSuccess = (Product) => ({
  type: "CREATE_PRODUCT_SUCCESS",
  payload: Product,
});

export const createProductFailure = () => ({
  type: "CREATE_PRODUCT_FAILURE",
});

export const updateProductStart = () => ({
  type: "UPDATE_PRODUCT_START",
});

export const updateProductSuccess = (Product) => ({
  type: "UPDATE_PRODUCT_SUCCESS",
  payload: Product,
});

export const updateProductFailure = () => ({
  type: "UPDATE_PRODUCT_FAILURE",
});
