import { FETCH_DATA, CHANGE_DATA, LOGIN_DETAILS } from "./types";
import axios from "axios";

const apiUrl = "http://www.json-generator.com/api/json/get/cfPMEGqhXC?indent=2";

export const fetchData = data => {
  return {
    type: FETCH_DATA,
    data: data
  };
};

export const changeData = data => {
  return {
    type: CHANGE_DATA,
    data: data
  };
};

export const fetchMyData = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};


export const loginDetails = data => {
    return {
        type: LOGIN_DETAILS,
        data
    }
}
