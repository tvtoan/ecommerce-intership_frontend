import { combineReducers } from 'redux';

// shop's reducers 
import UIReducer from './shop/ui/reducers';

const reducerApp = combineReducers({
  UIReducer,
  // ErrorReducer,
  // FarmReducer,
  // TreeReducer,
  // DeviceReducer,
  // TreeNutritionReducer,
  // TreeOrderReducer,
  // ScheduleReducer,
  // SubfarmReducer
});

export default reducerApp;