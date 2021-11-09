//Obtener todos los usuarios

export const getUsersStart = () => ({
  type: "GET_USERS_START",
});

export const getUsersSuccess = (user) => ({
  type: "GET_USERS_SUCCESS",
  payload: user,
});

export const getUsersFailure = () => ({
  type: "GET_USERS_FAILURE",
});

//Registrar en el usuario

export const registerStart = () => ({
  type: "GET_REGISTER_START",
});

export const registerSuccess = (user) => ({
  type: "GET_REGISTER_SUCCESS",
  payload: user,
});

export const registerFailure = () => ({
  type: "GET_REGISTER_FAILURE",
});
