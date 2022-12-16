import * as types from "./actionTypes";

import axios from "axios";

export const getDataRequest = () => {
  return { type: types.GET_DATA_REQUEST };
};

export const getDataSuccess = (payload) => {
  return { type: types.GET_DATA_SUCCESS, payload };
};

export const getDataFailure = () => {
  return { type: types.GET_DATA_FAILURE };
};

export const getData = () => (dispatch) => {
  dispatch(getDataRequest());
  return axios
    .get("https://json-mock-cp-cl1n.onrender.com/products")
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(getDataFailure());
    })
};
