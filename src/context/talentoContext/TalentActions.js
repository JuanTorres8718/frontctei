//Obtener todos los proyectos

export const getTalenstStart = () => ({
  type: "GET_TALENTS_START",
});

export const getTalentsSuccess = (talent) => ({
  type: "GET_TALENTS_SUCCESS",
  payload: talent,
});

export const getTalentsFailure = () => ({
  type: "GET_TALENTS_FAILURE",
});
