import * as types from "./types";

// initial state for reducer
const initialState = {};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.REMOVE_IMAGE_REQUEST:
    case types.UPLOAD_IMAGE_REQUEST:
      return {
        ...state
      };
    default:
      return state;
  }
};
