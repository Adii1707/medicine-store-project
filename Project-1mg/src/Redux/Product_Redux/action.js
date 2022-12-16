
import { PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR } from "./actionTypes";
import axios from "axios";

const LOADING = () => {
  return {
    type: PRODUCT_LOADING,
  };
};

const SUCCESS = (payload) => {
  return {
    type: PRODUCT_SUCCESS,
    payload,
  };
};
const ERROR = () => {
  return {
    type: PRODUCT_ERROR,
  };
};
const getdata = (url) => (dispatch) => {
  dispatch(LOADING());
  console.log("kkk", url);
  return axios
    .get(url)
    .then((res) => {
      console.log("hey i am running");
      dispatch(SUCCESS(res.data));
    })
    .catch((error) => {
      dispatch(ERROR());
    });
};
export { LOADING, SUCCESS, ERROR, getdata };

