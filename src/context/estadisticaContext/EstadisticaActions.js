//Obtener todas las red de conocimientos

export const getAllValuesStart = () => ({
  type: "GET_VALUES_START",
});

export const getAllValuesSuccess = (value) => ({
  type: "GET_VALUES_SUCCESS",
  payload: value,
});

export const getAllValuesFailure = () => ({
  type: "GET_VALUES_FAILURE",
});

export const getCategoryStart = () => ({
  type: "GET_CATEGORIES_START",
});

export const getCategorySuccess = (category) => ({
  type: "GET_CATEGORIES_SUCCESS",
  payload: category,
});

export const getCategoryFailure = () => ({
  type: "GET_CATEGORIES_FAILURE",
});

export const getValueYearStart = () => ({
  type: "GET_VALUEYEAR_START",
});

export const getValueYearSuccess = (value) => ({
  type: "GET_VALUEYEAR_SUCCESS",
  payload: value,
});

export const getValueYearFailure = () => ({
  type: "GET_VALUEYEAR_FAILURE",
});
