import axios from "axios";
import {
  getCentrosFailure,
  getCentrosStart,
  getCentrosSuccess,
  getCiiuFailure,
  getCiiuStart,
  getCiiuSuccess,
  getDepartamentosFailure,
  getDepartamentosStart,
  getDepartamentosSuccess,
  getDisciplinaFailure,
  getDisciplinaStart,
  getDisciplinaSuccess,
  getFormacionFailure,
  getFormacionStart,
  getFormacionSuccess,
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
  getUserEmailFailure,
  getUserEmailStart,
  getUserEmailSuccess,
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
    const array = [];
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/municipios"
    );
    res.data.forEach((result) => {
      array.push({
        label: result.nombre_municipio,
        value: result.codigo_municipio,
      });
    });
    dispatch(getMunicipiosSuccess(array));
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
    const array = [];
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/semilleros"
    );
    res.data.forEach((result) => {
      array.push({
        label: result.nombre_semillero.split(" ")[0],
        value: result.codigo_semillero,
      });
    });
    // console.log(array);
    // console.log(res.data);
    dispatch(getSemilleroSuccess(array));
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

//Obtener todos los email
export const getAllEmail = async (dispatch) => {
  dispatch(getUserEmailStart());
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/users_email");

    dispatch(getUserEmailSuccess(res.data));
  } catch (err) {
    dispatch(getUserEmailFailure());
  }
};

//Obtener todos los ciiu
export const getAllCiiu = async (dispatch) => {
  dispatch(getCiiuStart());
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/table/ciiu");

    dispatch(getCiiuSuccess(res.data));
  } catch (err) {
    dispatch(getCiiuFailure());
  }
};

//Obtener todos los email
export const getAllDisciplina = async (dispatch) => {
  dispatch(getDisciplinaStart());
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/disciplina"
    );

    dispatch(getDisciplinaSuccess(res.data));
  } catch (err) {
    dispatch(getDisciplinaFailure());
  }
};

export const getAllFormacion = async (dispatch) => {
  dispatch(getFormacionStart());
  try {
    let array = [];
    const res = await axios.get(
      process.env.REACT_APP_API_URL + "/table/formacion"
    );

    res.data.forEach((result) => {
      array.push({
        label: result.nombre_programas,
        value: result.codigo_formacion,
      });
    });

    dispatch(getFormacionSuccess(array));
  } catch (err) {
    dispatch(getFormacionFailure());
  }
};
