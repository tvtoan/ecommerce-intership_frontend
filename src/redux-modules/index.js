import { combineReducers } from "redux";
// common reducers
import AuthReducer from "./auth/reducers";
// shop's reducers
import UIReducer from "./shop/ui/reducers";

const reducerApp = combineReducers({
  UIReducer,
  AuthReducer,
  // FarmReducer,
  // TreeReducer,
  // DeviceReducer,
  // TreeNutritionReducer,
  // TreeOrderReducer,
  // ScheduleReducer,
  // SubfarmReducer
});

export default reducerApp;
