import * as types from './types';

// initial state for reducer
const initialState = {
  error: null,
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ERROR_MESSAGE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};