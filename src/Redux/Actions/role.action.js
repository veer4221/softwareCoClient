
import { roleMenuAPI, getUserAPI, getAllProductAPI, getProductAPI, getallRoleAPI, getroleMenuAPI, getRoleByIdAPI } from "../../utils/network/apis";
import { callAPI } from "../../utils/network/networkManager";
import { authConstants, permissionContants, productContants, userContants } from "../constants";

export const setProductFormJSONAction = (jsonData) => {
  return async (dispatch) => {
    dispatch({
      type: productContants.PRODUCT_FORM_SET_JSON,
      payload: jsonData,
    });
  };
};

export const getPermissionMenuAction = (id) => {
  var nodes = [];
  return async (dispatch) => {
    dispatch({
      type: permissionContants.GET_PERMISSION_MENU_REQUEST,

    });

    try {
      const res = await callAPI(getroleMenuAPI, {}, "GET", {});
      console.log("resAction3233", res);
      if (res?.data && res?.data?.success) {
        nodes = res?.data?.nodes

      }
    } catch (error) {
      console.log(" API Call come execption ... ", error);
    }
    try {
      const res = await callAPI(getRoleByIdAPI, { id }, "GET", {});
      console.log("resAction32334332", res);
      if (res?.data && res?.data?.success) {

        dispatch({
          type: permissionContants.GET_PERMISSION_MENU_SUCCESS,
          payload: {
            nodes,
            permissions: res?.data?.permissions.map((dt) => dt.permission_id),
            roleinfo: res?.data?.role
          }
        });
      }
    } catch (error) {
      console.log(" API Call come execption ... ", error);
    }


  };
};

export const getAllRoleAction = (jsonData) => {
  return async (dispatch) => {
    dispatch({
      type: permissionContants.GET_ALL_ROLE_REQUEST,
    });
    try {
      const res = await callAPI(getallRoleAPI, {}, "GET", {});
      console.log("resAction3233", res);
      if (res?.data && res?.data?.success) {
        dispatch({
          type: permissionContants.GET_ALL_ROLE_SUCCESS,
          payload: res?.data,
        });
      }
    } catch (error) {
      console.log(" API Call come execption ... ", error);
    }
  };
};

