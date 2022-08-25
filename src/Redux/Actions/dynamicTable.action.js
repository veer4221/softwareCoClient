import { dynaamicTableConst } from "../constants";

export const setCheckBoxDefaultValueAction = (jsonData) => {
  return async (dispatch) => {
    dispatch({
      type: dynaamicTableConst.CHECKBOX_DEFAULT_VALUE_SET,
      payload: jsonData,
    });
  };
};

export const setCheckBoxValueAtIndexAction = (jsonData) => {
  return async (dispatch) => {
    dispatch({
      type: dynaamicTableConst.CHECKBOX_VALUE_SET_ON_INDEX,
      payload: jsonData,
    });
  };
};
