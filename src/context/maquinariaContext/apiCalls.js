import axios from "axios";
import {
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
