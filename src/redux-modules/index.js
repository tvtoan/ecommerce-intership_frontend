import { combineReducers } from "redux";
// common reducers
import AuthReducer from "./auth/reducers";
// user's reducers
import UIReducer from "./user/ui/reducers";
import CartReducer from "./user/cart/reducers";
// data reducers
import CategoryReducer from "./data/category/reducers";
import ProductReducer from "./data/product/reducers";

const reducerApp = combineReducers({
  UIReducer,
  AuthReducer,
  CategoryReducer,
  ProductReducer,
  CartReducer
  // FarmReducer,
  // TreeReducer,
  // DeviceReducer,
  // TreeNutritionReducer,
  // TreeOrderReducer,
  // ScheduleReducer,
  // SubfarmReducer
});

export default reducerApp;
