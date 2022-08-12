// import {
//   addUserAPI,
//   emailCheckerAPI,
//   updateUserAPI,
//   userIsPresentOrNotAPI,
//   userProfileAPI,
//   checkUserStatusAPI,
//   updatePaymentStatusAPI,
// } from "../../api/index";
import { roleMenuAPI, getUserAPI } from "../../utils/network/apis";
import { callAPI } from "../../utils/network/networkManager";
import { authConstants, postContants, userContants } from "../constants";


export const setUserRoleAssignJSONAction = (jsonData) => {
  return async (dispatch) => {
    dispatch({
      type: userContants.USER_ROLE_ASSIGN_SET_JSON,
      payload: jsonData,
    });

    try {
      const res = await callAPI(roleMenuAPI, {}, "GET", {})
      console.log("resAction", res)
      if (res?.data && res?.data?.success) {
        dispatch({
          type: userContants.SET_UPDATED_ROLE,
          payload: res?.data?.rows.map((row) => {
            return {
              label: row?.role_name,
              value: row?.id
            }
          })
        })
      };


    } catch (error) {
      console.log(' API Call come execption ... ', error)

    }

  }
}
export const setUserDataAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: userContants.GET_USER__REQUEST, });

    try {
      const res = await callAPI(getUserAPI, { id }, "GET", {})
      console.log("resAction333", res)
      if (res?.data && res?.data?.success) {
        dispatch({
          type: userContants.GET_USER__SUCCESS,
          payload: res?.data?.adminUser
        })
      };


    } catch (error) {
      console.log(' API Call come execption ... ', error)

    }

  }
}
// export const cheakUserStatusAction = (body) => {
//   return async (dispatch) => {
//     dispatch({ type: userContants.CHECK_USER_STATUS_REQUEST });
//     const res = await checkUserStatusAPI(body);
//     // console.log(res)
//     if (res.status === 200) {
//       dispatch({
//         type: userContants.CHECK_USER_STATUS_SUCCESS,
//         payload: res.data,
//       });
//     }
//   };
// };
// export const resetUserStatusAction = () => {
//   return async (dispatch) => {
//     dispatch({ type: userContants.RESET_USER_STATUS })
//   }
// }
// export const updatePaymentStatusAction = (body) => {
//   return async (dispatch) => {
//     dispatch({ type: userContants.UPDATE_PAYMENT_STATUS_REQUEST })
//     const res = await updatePaymentStatusAPI(body);

//     if (res.status === 200 && res.data.success == true) {

//       dispatch({
//         type: userContants.UPDATE_PAYMENT_STATUS_SUCCESS,
//         payload: "payment done",
//       });
//     }
//   }
// }
// export const getUserProfileAction = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: userContants.GET_USER_PROFILE_REQUEST });
//     const res = await userProfileAPI(id);
//     console.log(res.data.adminUser);

//     console.log(res.status);
//     if (res.status === 200 && res.data.success == true) {
//       const { adminUser } = res.data;
//       dispatch({
//         type: userContants.GET_USER_PROFILE_SUCCESS,
//         payload: adminUser,
//       });
//     }
//   };
// };
// export const emailCheckAction = (email) => {
//   return async (dispatch) => {
//     dispatch({ type: userContants.EMAIL_CHECKER_REQUEST });
//     const res = await emailCheckerAPI(email);
//     const { success } = res.data;
//     console.log(res.status);
//     if (res.status === 200) {
//       dispatch({
//         type: userContants.EMAIL_CHECKER_SUCCESS,
//         payload: { adminUser: res.data.adminUser, success: res.data.success },
//       });
//     }
//   };
// };
// export const checkUserPreasentOrNotAction = (email) => {
//   return async (dispatch) => {
//     dispatch({ type: userContants.USER_IS_PRESENT_OR_NOT_REQUEST });
//     const res = await userIsPresentOrNotAPI(email);

//     if (res.status === 200 && res.data.success == true) {
//       dispatch({
//         type: userContants.USER_IS_PRESENT_OR_NOT_SUCCESS,
//         payload: {
//           message: res.data.message,
//           success: res.data.success,
//           email: email,
//         },
//       });
//     }

//     if (res.status === 200 && res.data.success == false) {
//       dispatch({
//         type: userContants.USER_IS_PRESENT_OR_NOT_SUCCESS,
//         payload: { message: res.data.error, success: res.data.success },
//       });
//     }
//     // dispatch({ type: userContants,payload:email})
//   };
// };
// export const stateUpdateAction = (obj) => {
//   return async (dispatch) => {
//     dispatch({ type: userContants.UPDATE_STATE_REQUEST });
//     dispatch({ type: userContants.UPDATE_STATE_SUCCESS, payload: obj });
//   };
// };
// export const addUserAction = (obj) => {
//   return async (dispatch) => {
//     dispatch({ type: userContants.ADD_USER_REQUEST });
//     const res = await addUserAPI(obj);
//     if (res.status === 200 && res.data.success == true) {
//       dispatch({
//         type: userContants.ADD_USER_SUCCESS,
//         payload: { message: "User CREATED", success: res.data.success },
//       });
//     }
//     if (res.status === 200 && res.data.success == false) {
//       dispatch({
//         type: userContants.ADD_USER_FAILURE,
//         payload: { error: res.data.error, success: res.data.success },
//       });
//     }
//   };
// };
// export const updateUserAction = (user) => {
//   return async (dispatch) => {
//     dispatch({ type: userContants.USER_UPDATE_REQUEST });
//     const res = await updateUserAPI(user);
//     if (res.status === 200) {
//       dispatch({
//         type: userContants.USER_UPDATE_SUCCESS,
//         payload: { adminUser: "updated", success: res.data.success },
//       });
//     }
//   };
// };
// export const resetMessageActon = () => {
//   return async (dispatch) => {
//     dispatch({ type: userContants.RESET_USER_MESSAGE })
//   }
// }