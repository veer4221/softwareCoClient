import { dynaamicTableConst } from "../constants";

const initState = {
  error: null,
  message: "",
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case dynaamicTableConst.CHECKBOX_DEFAULT_VALUE_SET:
      state = {
        ...state,
        [action.payload.tableSlug]: { checkbox: action.payload.checkboxData },
      };
      break;
    case dynaamicTableConst.CHECKBOX_VALUE_SET_ON_INDEX:
      console.log("red", action.payload);
      state = {
        ...state,
        [action.payload.tableSlug]: {
          ...state[action.payload.tableSlug],
          checkbox: state[action.payload.tableSlug].checkbox.map(
            (row, index) => {
              if (action.payload.fieldIndex !== index) return row;
              return action.payload.value;
            }
          ),
        },
      };
      break;
    default: {
      return state;
    }
  }
  return state;
};
