import * as types from "./types";

// initial state for reducer
const initialState = {
  isOrderSuccess: null
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        isOrderSuccess: true,
      };
    case types.ADD_ORDER_REQUEST_FAIL:
      return {
        ...state,
        isOrderSuccess: false,
      };
    default:
      return state;
  }
};
