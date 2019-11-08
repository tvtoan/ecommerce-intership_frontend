import * as types from './types';

// initial state for reducer
const initialState = {
  user: null,
  isAuthenticated: false,
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true
      };
    case types.REGISTER_REQUEST:
      return {
        ...state,
        isRegisted: true,
      };
    case types.LOGOUT:
      return {
        ...initialState,
      }
    case types.FORGOT_PASSWORD_MESSAGE:
      return {
        message: action.message
      };
    case types.RECIEVED_NEW_PASS_MESSAGE:
      return {
        message: action.message
      };
    default:
      return state;
  }
};