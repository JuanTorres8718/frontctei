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

//Actualizar usuarop

export const updateUserStart = () => ({
  type: "UPDATE_USER_START",
});

export const updateUserSuccess = (user) => ({
  type: "UPDATE_USER_SUCCESS",
  payload: user,
});

export const updateUserFailure = () => ({
  type: "UPDATE_USER_FAILURE",
});

//Eliminar usuario

export const deleteUserStart = () => ({
  type: "DELETE_USER_START",
});

export const deleteUserSuccess = (codigo_usuario) => ({
  type: "DELETE_USER_SUCCESS",
  payload: codigo_usuario,
});

export const deleteUserFailure = () => ({
  type: "DELETE_USER_FAILURE",
});
