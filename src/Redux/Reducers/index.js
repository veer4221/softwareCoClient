import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import productReducer from "./product.reducer";
import roleReducer from "./role.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  role: roleReducer,
});

export default rootReducer;
