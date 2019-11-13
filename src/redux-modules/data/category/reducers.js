import * as types from "./types";

// initial state for reducer
const initialState = {
  category: null,
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_REQUEST:
      return {
        ...state,
        category: action.category
      };
    case types.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        category: action.category
      };
    case types.UPDATE_CATEGORY_REQUEST:
      return {
        ...state
      };
    case types.CREATE_CATEGORY_REQUEST:
      return {
        ...state
      };
    case types.REMOVE_CATEGORY_REQUEST:
      return {
        ...state
      };
    default:
      return state;
  }
};
