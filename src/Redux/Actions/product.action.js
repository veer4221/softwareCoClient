
import { roleMenuAPI, getUserAPI, getAllProductAPI, getProductAPI, getCartAPI } from "../../utils/network/apis";
import { callAPI } from "../../utils/network/networkManager";
import { authConstants, productContants, userContants } from "../constants";

export const setProductFormJSONAction = (jsonData) => {
  return async (dispatch) => {
    dispatch({
      type: productContants.PRODUCT_FORM_SET_JSON,
      payload: jsonData,
    });
  };
};
export const getCartDataAction = (jsonData) => {
  return async (dispatch) => {
    dispatch({
      type: productContants.GET_CART_REQUEST,
    });
    try {
      const res = await callAPI(getCartAPI, {}, "GET", {});
      console.log("resAction3233", res);
      if (res?.data && res?.data?.success) {
        console.log("map", res?.data?.rows.map((data) => data?.Product))
        dispatch({
          type: productContants.GET_CART_SUCCESS,
          payload: res?.data?.rows.map((data) => data?.Product)
        });
      }
    } catch (error) {
      console.log(" API Call come execption ... ", error);
    }
  }
}
export const getAllProductAction = () => {
  return async (dispatch) => {
    dispatch({
      type: productContants.GET_ALL_PRODUCT_REQUEST,
    });
    try {
      const res = await callAPI(getAllProductAPI, {}, "GET", {});
      console.log("resAction3233", res);
      if (res?.data && res?.data?.success) {
        dispatch({
          type: productContants.GET_ALL_PRODUCT_SUCCESS,
          payload: res?.data,
        });
      }
    } catch (error) {
      console.log(" API Call come execption ... ", error);
    }
  };
};
export const getProductInfoAction = (id) => {
  return async (dispatch) => {
    dispatch({
      type: productContants.GET_PRODUCT_REQUEST,
    });

    try {
      const res = await callAPI(getProductAPI, { id }, "GET", {});
      console.log("resAction", res);
      if (res?.data && res?.data?.success) {
        dispatch({
          type: productContants.GET_PRODUCT_SUCCESS,
          payload: res?.data,
        });
      }
    } catch (error) {
      console.log(" API Call come execption ... ", error);
    }
  };
};
