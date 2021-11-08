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
