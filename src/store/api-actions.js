import {ActionCreator} from "./action";
import {AppRoute} from "../utils/const";
import {settings} from "../utils/const";
import axios from "axios";


export const fetchData = () => (dispatch, _getState) => (
  axios.get("../../data.json")
  .then((response) => {
    dispatch(ActionCreator.getData(response.data));
  })
);
