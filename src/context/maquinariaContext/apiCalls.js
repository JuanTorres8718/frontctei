import axios from "axios";
import Swal from "sweetalert2";
import {
  editMaquinaryFailure,
  editMaquinaryStart,
  editMaquinarySuccess,
  getMaquinaryFailure,
  getMaquinaryStart,
  getMaquinarySuccess,
} from "./MaquinaryActions";

export const getMaquinarys = async (dispatch) => {
  dispatch(getMaquinaryStart());
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/maquinary");
    dispatch(getMaquinarySuccess(res.data));
  } catch (error) {
    dispatch(getMaquinaryFailure());
  }
};

export const updateMaquinary = async (maquinary, dispatch) => {
  dispatch(editMaquinaryStart());
  try {
    const res = await axios.put(
      process.env.REACT_APP_API_URL + "/maquinary/" + maquinary.codigo_equipo,
      maquinary
    );
    dispatch(editMaquinarySuccess(res.data));
    Swal.fire({
      title: "Actualizado!",
      text: "La maquina/equipo fue actualizado correctamente",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  } catch (error) {
    Swal.fire({
      title: "Upss!",
      text: "Sucedio algún problema con la base de datos",
      icon: "warning",
      confirmButtonText: "Cerrar",
    });
    dispatch(editMaquinaryFailure());
  }
};
