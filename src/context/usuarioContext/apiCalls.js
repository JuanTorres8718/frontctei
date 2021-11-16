import axios from "axios";
import Swal from "sweetalert2";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
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
      text: "Usuario guardado correctamente",
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

export const EditUser = async (user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.put(
      process.env.REACT_APP_API_URL + "/editUser/" + user.codigo_usuario,
      user
    );
    dispatch(updateUserSuccess(res.data));
    Swal.fire({
      title: "Actualizado!",
      text: "Usuario actualizado correctamente",
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
    dispatch(updateUserFailure());
  }
};

export const deleteUser = async (codigo_usuario, dispatch) => {
  dispatch(deleteUserStart());
  try {
    console.log(
      process.env.REACT_APP_API_URL + "/userDelete/" + codigo_usuario
    );
    await axios.delete(
      process.env.REACT_APP_API_URL + "/userDelete/" + codigo_usuario
    );

    dispatch(deleteUserSuccess(codigo_usuario));
    Swal.fire({
      title: "Eliminado!",
      text: "Usuario eliminado correctamente",
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
    dispatch(deleteUserFailure());
  }
};
