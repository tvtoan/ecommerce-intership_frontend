import * as types from './types';
import callApi from 'helpers/api/CallApi';
import handleError from 'helpers/handlers';
import { setToken, removeToken, setUser, removeUser } from 'helpers/auth/MethodStorage';

// action (Actions are payloads of information that send data from your application to your store)
export const aLogin = (user) => ({
  type: types.LOGIN_REQUEST,
  user,
});

export const aRegister = () => ({
  type: types.REGISTER_REQUEST,
});

export const aLogout = () => ({
  type: types.LOGOUT,
});


// action creators (functions that create actions)
export const acLogin = (user, setFieldError) => async (dispatch) => {
  try {
    const res = await callApi(`auth/login`, undefined, 'POST', user);
    setToken(res.accessToken);
    setUser(res.user);
    dispatch(aLogin(res.user));
  } catch (error) {
    handleError(dispatch, error, setFieldError)
  }
};

export const acRegister = (user, setFieldError) => async (dispatch) => {
  try {
    await callApi(`auth/register`, undefined, 'POST', user);
    dispatch(aRegister());
  } catch (error) {
    handleError(dispatch, error, setFieldError)
  }
};

export const acLogout = () => async (dispatch) => {
  try {
    await callApi(`auth/logout`, undefined, 'POST', undefined, true);
    removeToken();
    removeUser();
    dispatch(aLogout());
  } catch (error) {
    handleError(dispatch, error)
  }
}