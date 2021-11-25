import axios from "axios";
import Swal from "sweetalert2";
import {
  getTalenstStart,
  getTalentsFailure,
  getTalentsSuccess,
  updateTalentFailure,
  updateTalentStart,
  updateTalentSuccess,
} from "./TalentActions";

export const getTalents = async (dispatch) => {
  dispatch(getTalenstStart());
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/talents");
    dispatch(getTalentsSuccess(res.data));
  } catch (error) {
    dispatch(getTalentsFailure());
  }
};

export const updateTalent = async (talent, dispatch) => {
  dispatch(updateTalentStart());
  try {
    const res = await axios.put(
      process.env.REACT_APP_API_URL + "/talent/" + talent.codigo_talento,
      talent
    );
    dispatch(updateTalentSuccess(res.data));
    Swal.fire({
      title: "Actualizado!",
      text: "El talento humano fue actualizado correctamente",
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
    dispatch(updateTalentFailure());
  }
};
