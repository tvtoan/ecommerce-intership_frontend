import * as types from "./types";

// initial state for reducer
const initialState = {
  size: null
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SIZE_REQUEST:
      return {
        ...state,
        size: action.size
      };
    case types.GET_SIZES_REQUEST:
      return {
        ...state,
        size: action.size
      };
    case types.UPDATE_SIZE_REQUEST:
      return {
        ...state
      };
    case types.CREATE_SIZE_REQUEST:
      return {
        ...state
      };
    case types.REMOVE_SIZE_REQUEST:
      return {
        ...state
      };
    default:
      return state;
  }
};
