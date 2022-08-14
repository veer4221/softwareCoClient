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
        getUserInfo: action?.payload.userInfo,
        userRoleAssignForm: {
          ...state.userRoleAssignForm,
          formJson: {
            ...state.userRoleAssignForm.formJson,
            Fields: [
              ...state.userRoleAssignForm.formJson.Fields?.map((data) =>
                data?.name === "role"
                  ? { ...data, options: action.payload.options, initValue: action.payload?.userInfo?.role_id }
                  : { ...data, initValue: action.payload?.userInfo?.firstName }
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
