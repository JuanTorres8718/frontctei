import axios from "axios";
import {
  getCentrosFailure,
  getCentrosStart,
  getCentrosSuccess,
  getDepartamentosFailure,
  getDepartamentosStart,
  getDepartamentosSuccess,
  getGrupoFailure,
  getGrupoStart,
  getGrupoSuccess,
  getMunicipiosFailure,
  getMunicipiosStart,
  getMunicipiosSuccess,
  getNivelFailure,
  getNivelStart,
  getNivelSuccess,
  getProjectFailure,
  getProjectStart,
  getProjectSuccess,
  getRedFailure,
  getRedStart,
  getRedSuccess,
  getRegionalFailure,
  getRegionalStart,
  getRegionalSuccess,
  getRolSennovaFailure,
  getRolSennovaStart,
  getRolSennovaSuccess,
  getRubroFailure,
  getRubroStart,
  getRubroSuccess,
  getSemilleroFailure,
  getSemilleroStart,
  getSemilleroSuccess,
  getSubareasFailure,
  getSubareasStart,
  getSubareasSuccess,
  getTipologiasFailure,
  getTipologiasStart,
  getTipologiasSuccess,
} from "./TsActions";

//Obtener todas las redes de conocimientos
export const getAllRed = async (dispatch) => {
  dispatch(getRedStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/red_conocimientos"
    );
    dispatch(getRedSuccess(res.data));
  } catch (err) {
    dispatch(getRedFailure());
  }
};

//Obtener todas las regionales
export const getAllRegional = async (dispatch) => {
  dispatch(getRegionalStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/regionales"
    );
    dispatch(getRegionalSuccess(res.data));
  } catch (err) {
    dispatch(getRegionalFailure());
  }
};

//Obtener todas las tipologias
export const getAllTipologia = async (dispatch) => {
  dispatch(getTipologiasStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/tipologias"
    );
    dispatch(getTipologiasSuccess(res.data));
  } catch (err) {
    dispatch(getTipologiasFailure());
  }
};

//Obtener todos los departamentos
export const getAllDepartamento = async (dispatch) => {
  dispatch(getDepartamentosStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/departamentos"
    );
    dispatch(getDepartamentosSuccess(res.data));
  } catch (err) {
    dispatch(getDepartamentosFailure());
  }
};

//Obtener todas las subareas
export const getAllSubareas = async (dispatch) => {
  dispatch(getSubareasStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/subareas"
    );
    dispatch(getSubareasSuccess(res.data));
  } catch (err) {
    dispatch(getSubareasFailure());
  }
};

//Obtener todos los municipios
export const getAllMunicipios = async (dispatch) => {
  dispatch(getMunicipiosStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/municipios"
    );
    dispatch(getMunicipiosSuccess(res.data));
  } catch (err) {
    dispatch(getMunicipiosFailure());
  }
};

//Obtener todos los centros de formacion
export const getAllCentros = async (dispatch) => {
  dispatch(getCentrosStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/centros_formaciones"
    );
    dispatch(getCentrosSuccess(res.data));
  } catch (err) {
    dispatch(getCentrosFailure());
  }
};

//Obtener todos los grupos de investigacion
export const getAllGrupos = async (dispatch) => {
  dispatch(getGrupoStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/grupos"
    );
    dispatch(getGrupoSuccess(res.data));
  } catch (err) {
    dispatch(getGrupoFailure());
  }
};

//Obtener todos los niveles academicos
export const getAllNivel = async (dispatch) => {
  dispatch(getNivelStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/nivel_academico"
    );
    dispatch(getNivelSuccess(res.data));
  } catch (err) {
    dispatch(getNivelFailure());
  }
};

//Obtener todos los semilleros
export const getAllSemilleros = async (dispatch) => {
  dispatch(getSemilleroStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/semilleros"
    );
    dispatch(getSemilleroSuccess(res.data));
  } catch (err) {
    dispatch(getSemilleroFailure());
  }
};

//Obtener todos los roles sennova
export const getAllRolSennova = async (dispatch) => {
  dispatch(getRolSennovaStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/rol_sennova"
    );
    dispatch(getRolSennovaSuccess(res.data));
  } catch (err) {
    dispatch(getRolSennovaFailure());
  }
};

//Obtener todos los rubros
export const getAllRubros = async (dispatch) => {
  dispatch(getRubroStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/rubros"
    );
    dispatch(getRubroSuccess(res.data));
  } catch (err) {
    dispatch(getRubroFailure());
  }
};

//Obtener todos los proyectos
export const getAllProjects = async (dispatch) => {
  dispatch(getProjectStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/proyectos"
    );

    dispatch(getProjectSuccess(res.data));
  } catch (err) {
    dispatch(getProjectFailure());
  }
};
