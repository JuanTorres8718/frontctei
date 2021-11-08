import axios from "axios";
import {
  getTalenstStart,
  getTalentsFailure,
  getTalentsSuccess,
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
