//Obtener todos los proyectos

export const getProjecstStart = () => ({
  type: "GET_PROJECTS_START",
});

export const getProjectsSuccess = (project) => ({
  type: "GET_PROJECTS_SUCCESS",
  payload: project,
});

export const getProjectsFailure = () => ({
  type: "GET_PROJECTS_FAILURE",
});

//Crear proyecto

export const createProjectStart = () => ({
  type: "CREATE_PROJECT_START",
});

export const createProjectSuccess = (project) => ({
  type: "CREATE_PROJECT_SUCCESS",
  payload: project,
});

export const createProjectFailure = (error) => ({
  type: "CREATE_PROJECT_FAILURE",
  error: error,
});

//Actualizar proyecto

export const updateProjectStart = () => ({
  type: "UPDATE_PROJECT_START",
});

export const updateProjectSuccess = (project) => ({
  type: "UPDATE_PROJECT_SUCCESS",
  payload: project,
});

export const updateProjectFailure = () => ({
  type: "UPDATE_PROJECT_FAILURE",
});
