import * as types from "./types";

// initial state for reducer
const initialState = {
  isShowRegister: false,
  isShowLogin: false,
  isShowForgotPass: false,
  isShowSuccess: false
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_MODAL_SHOW:
      return {
        ...state,
        isShowRegister: action.isShow
      };
    case types.LOGIN_MODAL_SHOW:
      return {
        ...state,
        isShowLogin: action.isShow
      };
    case types.FORGOT_PASS_MODAL_SHOW:
      return {
        ...state,
        isShowForgotPass: action.isShow
      };
    case types.SUCCESS_MODAL_SHOW:
      return {
        ...state,
        isShowSuccess: action.isShow
      };
    case types.CLOSE_ALL_AUTH_MODAL_SHOW:
      return {
        ...state,
        isShowRegister: false,
        isShowLogin: false,
        isShowForgotPass: false
      };
    default:
      return state;
  }
};
