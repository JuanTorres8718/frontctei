//Obtener todas las red de conocimientos

export const getRedStart = () => ({
  type: "GET_RED_START",
});

export const getRedSuccess = (red) => ({
  type: "GET_RED_SUCCESS",
  payload: red,
});

export const getRedFailure = () => ({
  type: "GET_RED_FAILURE",
});

//Obtener todas las regionales

export const getRegionalStart = () => ({
  type: "GET_REGIONAL_START",
});

export const getRegionalSuccess = (regional) => ({
  type: "GET_REGIONAL_SUCCESS",
  payload: regional,
});

export const getRegionalFailure = () => ({
  type: "GET_REGIONAL_FAILURE",
});

//Obtener todas las tipologias

export const getTipologiasStart = () => ({
  type: "GET_TIPOLOGIAS_START",
});

export const getTipologiasSuccess = (tipologia) => ({
  type: "GET_TIPOLOGIAS_SUCCESS",
  payload: tipologia,
});

export const getTipologiasFailure = () => ({
  type: "GET_TIPOLOGIAS_FAILURE",
});

//Obtener todos los departamentos

export const getDepartamentosStart = () => ({
  type: "GET_DEPARTAMENTOS_START",
});

export const getDepartamentosSuccess = (departamento) => ({
  type: "GET_DEPARTAMENTOS_SUCCESS",
  payload: departamento,
});

export const getDepartamentosFailure = () => ({
  type: "GET_DEPARTAMENTOS_FAILURE",
});

//Obtener todas las subareas

export const getSubareasStart = () => ({
  type: "GET_SUBAREAS_START",
});

export const getSubareasSuccess = (subareas) => ({
  type: "GET_SUBAREAS_SUCCESS",
  payload: subareas,
});

export const getSubareasFailure = () => ({
  type: "GET_SUBAREAS_FAILURE",
});

//Obtener todos los municipios

export const getMunicipiosStart = () => ({
  type: "GET_MUNICIPIOS_START",
});

export const getMunicipiosSuccess = (municipio) => ({
  type: "GET_MUNICIPIOS_SUCCESS",
  payload: municipio,
});

export const getMunicipiosFailure = () => ({
  type: "GET_MUNICIPIOS_FAILURE",
});

//Obtener todos los centros de formacion

export const getCentrosStart = () => ({
  type: "GET_CENTROS_START",
});

export const getCentrosSuccess = (centro) => ({
  type: "GET_CENTROS_SUCCESS",
  payload: centro,
});

export const getCentrosFailure = () => ({
  type: "GET_CENTROS_FAILURE",
});

//Obtener todos los grupos de investigacion

export const getGrupoStart = () => ({
  type: "GET_GRUPO_START",
});

export const getGrupoSuccess = (grupo) => ({
  type: "GET_GRUPO_SUCCESS",
  payload: grupo,
});

export const getGrupoFailure = () => ({
  type: "GET_GRUPO_FAILURE",
});

//Obtener todos los niveles academicos

export const getNivelStart = () => ({
  type: "GET_NIVEL_START",
});

export const getNivelSuccess = (nivel) => ({
  type: "GET_NIVEL_SUCCESS",
  payload: nivel,
});

export const getNivelFailure = () => ({
  type: "GET_NIVEL_FAILURE",
});

//Obtener todos los semilleros

export const getSemilleroStart = () => ({
  type: "GET_SEMILLERO_START",
});

export const getSemilleroSuccess = (semillero) => ({
  type: "GET_SEMILLERO_SUCCESS",
  payload: semillero,
});

export const getSemilleroFailure = () => ({
  type: "GET_SEMILLERO_FAILURE",
});

//Obtener todos los roles sennova

export const getRolSennovaStart = () => ({
  type: "GET_ROLSENNOVA_START",
});

export const getRolSennovaSuccess = (rolSenova) => ({
  type: "GET_ROLSENNOVA_SUCCESS",
  payload: rolSenova,
});

export const getRolSennovaFailure = () => ({
  type: "GET_ROLSENNOVA_FAILURE",
});

//Obtener todos los rubros

export const getRubroStart = () => ({
  type: "GET_RUBRO_START",
});

export const getRubroSuccess = (rubro) => ({
  type: "GET_RUBRO_SUCCESS",
  payload: rubro,
});

export const getRubroFailure = () => ({
  type: "GET_RUBRO_FAILURE",
});

//Obtener todos los proyectos

export const getProjectStart = () => ({
  type: "GET_PROJECT_START",
});

export const getProjectSuccess = (proyecto) => ({
  type: "GET_PROJECT_SUCCESS",
  payload: proyecto,
});

export const getProjectFailure = () => ({
  type: "GET_PROJECT_FAILURE",
});

//Obtener todos los proyectos

export const getUserEmailStart = () => ({
  type: "GET_USERMAIL_START",
});

export const getUserEmailSuccess = (email) => ({
  type: "GET_USERMAIL_SUCCESS",
  payload: email,
});

export const getUserEmailFailure = () => ({
  type: "GET_USERMAIL_FAILURE",
});
