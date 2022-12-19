import React from 'react'
import * as types from "./actionTypes"

const intialState = {
  data: [],
  isLoading: false,
  isError: false,
  isAuth: false
}

const reducer = (state= intialState, action) => {
  const {type, payload} = action;
  switch (type){
    case types.GET_DATA_REQUEST:
      return {...state, isLoading: true}
    case types.GET_DATA_SUCCESS:
      return {...state, data: payload, isLoading: false };
    case types.GET_DATA_FAILURE:
      return {...state, isLoading: false, isError: true };
    case types.GET_OTP_SUCCESS:
      return {...state, isAuth: true};
    default:
      return state;
  }
}

export {reducer}