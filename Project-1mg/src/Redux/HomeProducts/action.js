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

export const getOtpRequest = () => {
  return { type: types.GET_OTP_REQUEST };
};

export const getOtpSuccess = (payload) => {
  return { type: types.GET_OTP_SUCCESS, payload };
};

export const getOtpFailure = () => {
  return { type: types.GET_OTP_FAILURE };
};


export const getData = (url) => (dispatch) => {
  dispatch(getDataRequest());
  return axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err)=>{
        console.log(err);
        dispatch(getDataFailure());
    })
};