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

//Editar talento

export const updateTalentStart = () => ({
  type: "UPDATE_TALENT_START",
});

export const updateTalentSuccess = (talent) => ({
  type: "UPDATE_TALENT_SUCCESS",
  payload: talent,
});

export const updateTalentFailure = () => ({
  type: "UPDATE_TALENT_FAILURE",
});
