//Obtener todos los proyectos

export const getMaquinaryStart = () => ({
  type: "GET_MAQUINARYS_START",
});

export const getMaquinarySuccess = (maquinary) => ({
  type: "GET_MAQUINARYS_SUCCESS",
  payload: maquinary,
});

export const getMaquinaryFailure = () => ({
  type: "GET_MAQUINARYS_FAILURE",
});

//Editar

export const editMaquinaryStart = () => ({
  type: "EDIT_MAQUINARY_START",
});

export const editMaquinarySuccess = (maquinary) => ({
  type: "EDIT_MAQUINARY_SUCCESS",
  payload: maquinary,
});

export const editMaquinaryFailure = () => ({
  type: "EDIT_MAQUINARY_FAILURE",
});
