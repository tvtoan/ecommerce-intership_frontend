import * as types from "./types";

// initial state for reducer
const initialState = {
  color: null
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COLOR_REQUEST:
      return {
        ...state,
        color: action.color
      };
    case types.GET_COLORS_REQUEST:
      return {
        ...state,
        color: action.color
      };
    case types.UPDATE_COLOR_REQUEST:
      return {
        ...state
      };
    case types.CREATE_COLOR_REQUEST:
      return {
        ...state
      };
    case types.REMOVE_COLOR_REQUEST:
      return {
        ...state
      };
    default:
      return state;
  }
};
