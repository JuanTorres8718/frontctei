import axios from "axios";
import Swal from "sweetalert2";
import {
  createProjectFailure,
  createProjectStart,
  createProjectSuccess,
  getProjecstStart,
  getProjectsFailure,
  getProjectsSuccess,
  updateProjectFailure,
  updateProjectStart,
  updateProjectSuccess,
} from "./proyectoActions";

//Obtener todos los proyectos
export const getProjects = async (dispatch) => {
  dispatch(getProjecstStart());
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/projects");
    dispatch(getProjectsSuccess(res.data));
  } catch (err) {
    dispatch(getProjectsFailure(err));
  }
};

//crear proyecto
export const createProject = async (data, dispatch) => {
  dispatch(createProjectStart());
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + "/projects",
      data
    );
    dispatch(createProjectSuccess(res.data));
    Swal.fire({
      title: "Guardado!",
      text: "Proyecto guardado correctamente",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Sucedio algún problema con la base de datos",
      icon: "error",
      confirmButtonText: "Cerrar",
    });
    dispatch(createProjectFailure());
  }
};

export const updateProject = async (project, dispatch) => {
  dispatch(updateProjectStart());
  try {
    const res = await axios.put(
      process.env.REACT_APP_API_URL + "/project/" + project.codigo_proyecto,
      project
    );
    dispatch(updateProjectSuccess(res.data));
    Swal.fire({
      title: "Actualizado!",
      text: "El proyecto se actualizo correctamente",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Sucedio algún problema con la base de datos",
      icon: "error",
      confirmButtonText: "Cerrar",
    });
    dispatch(updateProjectFailure());
  }
};
