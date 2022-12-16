import axios from "axios";
import * as types from "./actionType";


const getdatarequest = ()=>{
  return {
    type: types.GET_DATA_REQUEST,
  }
}

const getdatasuccess = (payload)=>{
  return {
    type: types.GET_DATA_SUCCESS,
    payload: payload
  }
}

const getdatafailure = ()=>{
  return {
    type: types.GET_DATA_FAILURE,
  }
}
 

export const getdata = ()=> (dispatch) => {
  dispatch(getdatarequest())
  try {
    return axios.get("https://json-mock-cp-cl1n.onrender.com/products")
    .then((r)=>(
      dispatch(getdatasuccess(r.data))

    )).catch((e)=>(
      dispatch(getdatafailure())
    ))
   // console.log("received response: ", response.data);
  } catch (err) {
    console.log("received error: ", err.toJSON());
  }
};

const ADDDataRequest = ()=> {
  return {
    type: types.POST_DATA_REQUEST,
  };
}
const ADDDataSuccess = (payload)=> {
  return {
    type: types.POST_DATA_SUCCESS,
    payload
  };
}
const ADDDataFailure = ()=> {
  return {
    type: types.POST_DATA_FAILURE,
  };
}

const postdata = ({url, desc, price}) => (dispatch) => {
  console.log("params", url);
  let data = {
    description: desc,
    discount: "29% off",
    images: url,
    maxrating: "",
    name: "Baidyanath Kamini Vidrawan Ras Keshar Yukta Tablet",
    price: price,
    rating: 3.9,
    realprice: 1307,
  };
  dispatch(ADDDataRequest());
  
  return axios.post(
      `https://json-mock-cp-cl1n.onrender.com/top-deals`, data
    )
    .then((res) => {
     dispatch(ADDDataSuccess());
    })
    .catch((error) => {
      dispatch(ADDDataFailure());
    });
};


function DELETETASKREQUEST() {
  return {
    type: types.DELETE_TASK_REQUEST,
  };
}
function DELETETASKSUCCESS() {
  return {
    type: types.DELETE_TASK_SUCCESS,
  };
  // function DELETETASKERROR() {
  //   return {
  //     type: types.DELETE_TASK_FAILURE,
  //   };
  // }
}

const deletetask = (id) => (dispatch) => {
  console.log("id:",id)
  dispatch(DELETETASKREQUEST());
 return  axios
    .delete(`https://json-mock-cp-cl1n.onrender.com/top-deals/${id}`)
    .then((res) => {
     // console.log(res.data)
     console.log("id:",id)

     return dispatch(DELETETASKSUCCESS());
   }
   )
  // const handleDelete = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };
    
};

export {getdatafailure, getdatarequest, getdatasuccess,
   ADDDataFailure,ADDDataRequest,ADDDataSuccess,postdata, deletetask}