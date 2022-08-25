import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import productReducer from "./product.reducer";
import roleReducer from "./role.reducer";
import dynamicTable from "./dynamicTable.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  role: roleReducer,
  dynamicTable: dynamicTable,
});

export default rootReducer;
