import React from 'react';
import * as types from "./actionType"

const initialState = {
  isLoading: false,
  Data: [],
  isError: false,
}

export const reducer = (state= initialState, action) => {
     const {type, payload} = action;
 switch(type){
    case types.GET_DATA_REQUEST: 
    return {
      ...state,
      isLoading: true,
    }
    case types.GET_DATA_SUCCESS: 
    console.log(payload)
    return {
      ...state,
      isLoading: false,
      Data: payload,
    }
    case types.GET_DATA_FAILURE: 
    return {
      ...state,
      isLoading: true,
      isError: true,
    }
    case types.POST_DATA_REQUEST: 
    return {
      ...state,
      isLoading: true,
    }
    case types.POST_DATA_SUCCESS: 
    console.log(payload)
    return {
      ...state,
      isLoading: false,
      Data: payload,
    }
    case types.POST_DATA_FAILURE: 
    return {
      ...state,
      isLoading: false,
      isError: true,
    }
    default: return state;
 }
}
