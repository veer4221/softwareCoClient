
import { roleMenuAPI, getUserAPI } from "../../utils/network/apis";
import { callAPI } from "../../utils/network/networkManager";
import { authConstants, postContants, userContants } from "../constants";

export const setUserRoleAssignJSONAction = (jsonData, id) => {
  var options;
  return async (dispatch) => {
    dispatch({
      type: userContants.USER_ROLE_ASSIGN_SET_JSON,
      payload: jsonData,
    });
    try {
      const res = await callAPI(roleMenuAPI, {}, "GET", {});
      console.log("resAction", res);
      if (res?.data && res?.data?.success) {
        options = res?.data?.rows.map((row) => {
          return {
            label: row?.role_name,
            value: row?.id,
          };
        })
        console.log("options", options);

      }
      try {
        const res = await callAPI(getUserAPI, { id }, "GET", {});
        console.log("resAction333", res);
        if (res?.data && res?.data?.success) {
          dispatch({
            type: userContants.SET_UPDATED_ROLE,
            payload: { userInfo: res?.data?.adminUser, options }
          });
        }
      } catch (error) {
        console.log(" API Call come execption ... ", error);
      }
    } catch (error) {
      console.log(" API Call come execption ... ", error);
    }
  };
};

export const setUserDataAction = (id) => {
  return async (dispatch) => {

    try {

      dispatch({ type: userContants.GET_USER__REQUEST });
    } catch (error) {
      console.log("error4221", error);
    }
    // // alert("hii");
    try {
      const res = await callAPI(getUserAPI, { id }, "GET", {});
      console.log("resAction333", res);
      if (res?.data && res?.data?.success) {
        dispatch({
          type: userContants.GET_USER__SUCCESS,
          payload: res?.data?.adminUser,
        });
      }
    } catch (error) {
      console.log(" API Call come execption ... ", error);
    }
  };
};
