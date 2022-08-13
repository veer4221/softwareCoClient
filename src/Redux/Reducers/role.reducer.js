/* eslint-disable default-case */

import { permissionContants, userContants } from "../constants";

const initState = {
  error: null,
  message: "",
  getRoleInfo: {},
  loading: false,
  roleState: {},
  getAllRole: {},
  permissionMenu: [],
  romeForm: {
    isChange: new Date(),
    formJson: {},
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case permissionContants.PRODUCT_FORM_SET_JSON:
      state = {
        ...state,
        loading: false,
        productForm: {
          ...state.productForm,
          formJson: action.payload,
        },
      };
    case permissionContants.GET_PERMISSION_MENU_REQUEST:
      state = {
        ...state,
        loading: true,
        getUserInfo: {},
      };
      break;
    case permissionContants.GET_PERMISSION_MENU_SUCCESS:
      state = {
        ...state,
        loading: false,
        permissionMenu: action.payload,
      };
      break;
    case userContants.EMAIL_CHECKER_REQUEST:
      state = {
        ...state,
        loading: true,
        getUserInfo: {},
      };
      break;
    case permissionContants.GET_ALL_ROLE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case permissionContants.GET_ROLE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case permissionContants.GET_ROLE_SUCCESS:
      state = {
        ...state,
        loading: false,
        getRoleInfo: action.payload,
      };
      break;
    case permissionContants.GET_ALL_ROLE_SUCCESS:
      state = {
        ...state,
        loading: false,
        getAllRole: action.payload,
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

    default: {
      return state;
    }
  }

  return state;
};
