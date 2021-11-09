import axios from "axios";
import Swal from "sweetalert2";
import {
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./UsuarioActions";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/users");
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    Swal.fire({
      title: "Error!",
      text: "Sucedio algún problema con la base de datos",
      icon: "error",
      confirmButtonText: "Cerrar",
    });
    dispatch(getUsersFailure());
  }
};

export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + "/register",
      user
    );
    dispatch(registerSuccess(res.data));
    Swal.fire({
      title: "Guardado!",
      text: "Proyecto guardado correctamente",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  } catch (err) {
    Swal.fire({
      title: "Upss!",
      text: "Sucedio algún problema con la base de datos",
      icon: "warning",
      confirmButtonText: "Cerrar",
    });
    dispatch(registerFailure());
  }
};
