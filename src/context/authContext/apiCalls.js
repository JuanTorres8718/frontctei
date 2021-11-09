import axios from "axios";
import Swal from "sweetalert2";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthAction";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + "/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    Swal.fire({
      title: "Upss!",
      text: "Correo o Contraseña incorrecta",
      icon: "warning",
      confirmButtonText: "Cerrar",
    });
    dispatch(loginFailure());
  }
};

export const logoutFinish = async (dispatch) => {
  dispatch(logout());
};
