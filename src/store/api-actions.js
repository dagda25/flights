import {ActionCreator} from "./action";
import axios from "axios";


export const fetchData = () => (dispatch, _getState) => (
  axios.get(`https://flights-745.herokuapp.com/api`)
  .then((response) => {
    dispatch(ActionCreator.getData(response.data));
  })
);
