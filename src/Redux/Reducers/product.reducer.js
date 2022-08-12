/* eslint-disable default-case */

import { productContants, userContants } from "../constants";

const initState = {
  error: null,
  message: "",
  getProductInfo: {},
  loading: false,
  productState: {},
  getAllProduct: {},
  productForm: {
    isChange: new Date(),
    formJson: {},
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case productContants.PRODUCT_FORM_SET_JSON:
      state = {
        ...state,
        loading: false,
        productForm: {
          ...state.productForm,
          formJson: action.payload,
        },
      };
    case userContants.EMAIL_CHECKER_REQUEST:
      state = {
        ...state,
        loading: true,
        getUserInfo: {},
      };
      break;
    case productContants.GET_ALL_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productContants.GET_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productContants.GET_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        getProductInfo: action.payload,
      };
      break;
    case productContants.GET_ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        getAllProduct: action.payload,
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
