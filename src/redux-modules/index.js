import { combineReducers } from "redux";
// common reducers
import AuthReducer from "./auth/reducers";
// shop's reducers
import UIReducer from "./shop/ui/reducers";
// seller's reducers
import CategoryReducer from "./seller/category/reducers";

const reducerApp = combineReducers({
  UIReducer,
  AuthReducer,
  CategoryReducer
  // FarmReducer,
  // TreeReducer,
  // DeviceReducer,
  // TreeNutritionReducer,
  // TreeOrderReducer,
  // ScheduleReducer,
  // SubfarmReducer
});

export default reducerApp;
