import * as fetchApi from './fetch.api';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_FAILED = 'UPDATE_PASSWORD_FAILED';
export const REGISTER_PENDING = 'REQUEST_REGISTER_PENDING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const loginPending = () => {
  return {type: LOGIN_PENDING};
};

export const loginSuccess = user => {
  return {type: LOGIN_SUCCESS, payload: user};
};

export const loginFailed = (error) => {
  return {type: LOGIN_FAILED, payload: error};
};

export const logoutPending = () => {
  return {type: LOGOUT_PENDING};
};

export const logoutSuccess = () => {
  return {type: LOGOUT_SUCCESS};
};

export const logoutFailed = () => {
  return {type: LOGOUT_FAILED};
};

export const resetPasswordSuccess = (email) => {
  return {type: RESET_PASSWORD_SUCCESS, payload: email};
};

export const resetPasswordFailed = (error) => {
  return {type: RESET_PASSWORD_FAILED, payload: error};
};

export const updatePasswordSuccess = (email) => {
  return {type: UPDATE_PASSWORD_SUCCESS, payload: email};
};

export const updatePasswordFailed = (error) => {
  return {type: UPDATE_PASSWORD_FAILED, payload: error};
};

export const registerPending = () => {
  return {type: REGISTER_PENDING};
};

export const registerSuccess = (email) => {
  return {type: REGISTER_SUCCESS, payload: email};
};

export const registerFailed = (error) => {
  return {type: REGISTER_FAILED, payload: error};
};

export const updateAuth = fetchApi.updateAuth;
export const login = fetchApi.login;
export const logout = fetchApi.logout;
export const register = fetchApi.register;
export const resetPassword = fetchApi.resetPassword;
export const updatePassword = fetchApi.updatePassword;