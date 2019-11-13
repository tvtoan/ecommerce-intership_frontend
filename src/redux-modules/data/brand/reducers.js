import * as types from "./types";

// initial state for reducer
const initialState = {
  brand: null
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BRAND_REQUEST:
      return {
        ...state,
        brand: action.brand
      };
    case types.GET_BRANDS_REQUEST:
      return {
        ...state,
        brand: action.brand
      };
    case types.UPDATE_BRAND_REQUEST:
      return {
        ...state
      };
    case types.CREATE_BRAND_REQUEST:
      return {
        ...state
      };
    case types.REMOVE_BRAND_REQUEST:
      return {
        ...state
      };
    default:
      return state;
  }
};
