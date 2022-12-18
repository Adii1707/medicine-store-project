
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
 
  return axios
    .get(url)
    .then((res) => {
      
      dispatch(SUCCESS(res.data));
    })
    .catch((error) => {
     
      dispatch(ERROR());
    });
};
const filtergetdata=(params)=>(dispatch)=>{
  console.log("i am params",params);
  dispatch(LOADING());
  axios
    .get("https://json-mock-cp-cl1n.onrender.com/products",params)
    .then((res) => {
      
      dispatch(SUCCESS(res.data));
    })
    .catch((e) => {
      dispatch(ERROR());
    });
}
export { LOADING, SUCCESS, ERROR, getdata,filtergetdata };

