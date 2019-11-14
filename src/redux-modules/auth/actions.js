import * as types from "./types";
import callApi from "helpers/api/CallApi";
import handleError from "helpers/handlers";
// import {
//   setToken,
//   removeToken,
//   setUser,
//   removeUser
// } from "helpers/auth/StorageMethods";
import setupDB, {addToken, removeToken, addUser, removeUser} from "helpers/auth/StorageIndexedDB";
// other action creators
import { acShowAuthModal } from "../user/ui/actions";

// action (Actions are payloads of information that send data from your application to your store)
export const aRegister = () => ({
  type: types.REGISTER_REQUEST
});

export const aLogin = user => ({
  type: types.LOGIN_REQUEST,
  user
});

export const aLogout = () => ({
  type: types.LOGOUT_REQUEST
});

// action creators (functions that create actions)
export const acRegister = (user, setFieldError) => async dispatch => {
  try {
    const res = await callApi({
      endpoint: `auth/register`,
      method: "POST",
      body: user,
      isRequestToken: false
    });
    dispatch(aRegister());
    if (!res.isSeller) {
      dispatch(acShowAuthModal("success", true));
    }
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acLogin = (user, setFieldError) => async dispatch => {
  try {
    const res = await callApi({
      endpoint: `auth/login`,
      method: "POST",
      body: user,
      isRequestToken: false
    });
    setupDB().then(addToken(res.accessToken));
    setupDB().then(addUser(res.user));
    console.log("res.user:", res.user);
    dispatch(aLogin(res.user));
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acLogout = () => async dispatch => {
  try {
    await callApi({
      endpoint: `auth/logout`,
      method: "POST"
    });
    // removeToken();
    // removeUser();
    setupDB().then(removeToken());
    setupDB().then(removeUser());
    dispatch(aLogout());
  } catch (error) {
    handleError(dispatch, error);
  }
};
