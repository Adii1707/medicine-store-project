import * as types from "./actionTypes"
import axios from "axios"

const getDiseasesData=(url)=>(dispatch)=>{
  dispatch({type:types.GET_DISEASES_REQUEST})
 return axios.get(url).then((r)=>{
      dispatch({type:types.GET_DISEASES_SUCCESS,payload:r.data})
 }).catch(er=>dispatch({type:types.GET_DISEASES_ERROR}))
}

export {getDiseasesData}