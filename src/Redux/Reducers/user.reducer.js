/* eslint-disable default-case */

import { userContants } from "../constants";

const initState = {
  error: null,
  message: "",
  getUserInfo: {},
  loading: false,
  userState: {},
  userRoleAssignForm: {
    isChange: new Date(),
    formJson: {},
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case userContants.EMAIL_CHECKER_REQUEST:
      state = {
        ...state,
        loading: true,
        getUserInfo: {},
      };
      break;
    case userContants.GET_USER__REQUEST:
      state = {
        ...state,
        loading: true,
      };
    case userContants.GET_USER__SUCCESS:
      state = {
        ...state,
        loading: false,
        getUserInfo: action.payload,
        userRoleAssignForm: {
          ...state.userRoleAssignForm,
          formJson: {
            ...state.userRoleAssignForm.formJson,
            Fields: [
              ...state.userRoleAssignForm.formJson.Fields?.map((data) =>
                data?.name === "role"
                  ? { ...data, initValue: action.payload?.role_id }
                  : data?.name === "rolename"
                  ? { ...data, initValue: action.payload?.firstName }
                  : data
              ),
            ],
          },
        },
      };
      break;
    case userContants.USER_ROLE_ASSIGN_SET_JSON:
      state = {
        ...state,
        loading: true,
        userRoleAssignForm: { ...state.userRoleAssignForm, formJson: action?.payload },
      };
      break;
    case userContants.SET_UPDATED_ROLE:
      state = {
        ...state,
        loading: false,
        userRoleAssignForm: {
          ...state.userRoleAssignForm,
          formJson: {
            ...state.userRoleAssignForm.formJson,
            Fields: [
              ...state.userRoleAssignForm.formJson.Fields?.map((data) => (data?.name === "role" ? { ...data, options: action.payload } : data)),
            ],
          },
        },
      };
      break;
    case userContants.RESET_USER_STATUS:
      state = {
        ...state,

        userState: {},
      };
      break;
    case userContants.RESET_USER_MESSAGE:
      state = {
        ...state,

        message: "",
      };
      break;
    case userContants.EMAIL_CHECKER_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getUserInfo: action.payload.adminUser,
      };
      break;
    case userContants.UPDATE_PAYMENT_STATUS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userContants.UPDATE_PAYMENT_STATUS_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        message: action.payload,
      };
      break;

    case userContants.CHECK_USER_STATUS_REQUEST:
      state = {
        ...state,
      };
      break;
    case userContants.CHECK_USER_STATUS_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        userState: action.payload,
      };
      break;

    case userContants.UPDATE_STATE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userContants.UPDATE_STATE_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        getUserInfo: { ...state.getUserInfo, ...action.payload },
      };
      break;
    case userContants.USER_UPDATE_REQUEST:
      console.log(action);
      state = {
        ...state,
        loading: true,
      };
      break;
    case userContants.USER_UPDATE_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        message: action.payload.adminUser,
      };
      break;
    case userContants.USER_IS_PRESENT_OR_NOT_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        getUserInfo: { ...state.getUserInfo, ...action.payload.email },
      };
      break;
    case userContants.ADD_USER_SUCCESS:
      console.log(action);
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case userContants.ADD_USER_FAILURE:
      console.log(action);
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case userContants.USER_IS_PRESENT_OR_NOT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userContants.GET_USER_PROFILE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userContants.GET_USER_PROFILE_SUCCESS:
      state = {
        ...state,
        loading: false,

        getUserInfo: action.payload,
      };
      break;

    case userContants.ADD_USER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    default: {
      return state;
    }
  }

  return state;
};
