import { KEY_TOKEN, KEY_INFO_USER } from 'common/Constants';

export const getToken = () => {
  return localStorage.getItem(KEY_TOKEN);
};

export const setToken = (value) => {
  localStorage.setItem(KEY_TOKEN, value);
};

export const removeToken = () => {
  localStorage.removeItem(KEY_TOKEN);
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem(KEY_INFO_USER));
};

export const setUser = (value) => {
  localStorage.setItem(KEY_INFO_USER, JSON.stringify(value));
};

export const removeUser = () => {
  localStorage.removeItem(KEY_INFO_USER);
};