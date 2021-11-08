import axios from "axios";
import Swal from "sweetalert2";
import {
  createProjectFailure,
  createProjectStart,
  createProjectSuccess,
  getProjecstStart,
  getProjectsFailure,
  getProjectsSuccess,
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

// //update1 movie & serie
// export const updateMovieSerie = async (movie, dispatch) => {
//   dispatch(updateMovieStart());
//   try {
//     const res = await axios.put("/movies/" + movie._id, movie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(updateMovieSuccess(res.data));
//   } catch (err) {
//     dispatch(updateMovieFailure());
//   }
// };

// //delete movie or series
// export const deleteMovieSerie = async (id, dispatch) => {
//   dispatch(deleteMovieStart());
//   try {
//     await axios.delete("/movies/" + id, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(deleteMovieSuccess(id));
//   } catch (err) {
//     dispatch(deleteMovieFailure());
//   }
// };
