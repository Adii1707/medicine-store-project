import React from "react";
import * as types from "./actionTypes";

const initialState = {
  diseasesData: [],
  isLoading: false,
  isError: false,
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DISEASES_REQUEST:
      return { ...oldState, isLoading: true };
    case types.GET_DISEASES_SUCCESS:
      return { ...oldState, isLoading: false, diseasesData: payload };
    case types.GET_DISEASES_ERROR:
      return { ...oldState, isLoading: false, isError: true };

    default:
      return oldState;
  }
};
