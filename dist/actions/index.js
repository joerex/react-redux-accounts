'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOGIN_PENDING = exports.LOGIN_PENDING = 'LOGIN_PENDING';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_ERROR = exports.LOGIN_ERROR = 'LOGIN_ERROR';
var LOGOUT_PENDING = exports.LOGOUT_PENDING = 'LOGOUT_PENDING';
var LOGOUT_SUCCESS = exports.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LOGOUT_ERROR = exports.LOGOUT_ERROR = 'LOGOUT_ERROR';
var RESET_PASSWORD_PENDING = exports.RESET_PASSWORD_PENDING = 'RESET_PASSWORD_PENDING';
var RESET_PASSWORD_SUCCESS = exports.RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
var RESET_PASSWORD_ERROR = exports.RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';
var UPDATE_PASSWORD_PENDING = exports.UPDATE_PASSWORD_PENDING = 'UPDATE_PASSWORD_PENDING';
var UPDATE_PASSWORD_SUCCESS = exports.UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
var UPDATE_PASSWORD_ERROR = exports.UPDATE_PASSWORD_ERROR = 'UPDATE_PASSWORD_ERROR';
var REGISTER_PENDING = exports.REGISTER_PENDING = 'REQUEST_REGISTER_PENDING';
var REGISTER_SUCCESS = exports.REGISTER_SUCCESS = 'REGISTER_SUCCESS';
var REGISTER_ERROR = exports.REGISTER_ERROR = 'REGISTER_ERROR';
var UPDATE_ROLE = exports.UPDATE_ROLE = 'UPDATE_ROLE';
var SET_INITIALIZED = exports.SET_INITIALIZED = 'SET_INITIALIZED';
var CLEAR_ERROR = exports.CLEAR_ERROR = 'CLEAR_ERROR';

var loginPending = exports.loginPending = function loginPending() {
  return { type: LOGIN_PENDING };
};

var loginSuccess = exports.loginSuccess = function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, user: user };
};

var loginError = exports.loginError = function loginError(error) {
  return { type: LOGIN_ERROR, error: error };
};

var logoutPending = exports.logoutPending = function logoutPending() {
  return { type: LOGOUT_PENDING };
};

var logoutSuccess = exports.logoutSuccess = function logoutSuccess() {
  return { type: LOGOUT_SUCCESS };
};

var logoutError = exports.logoutError = function logoutError(error) {
  return { type: LOGOUT_ERROR, error: error };
};

var resetPasswordPending = exports.resetPasswordPending = function resetPasswordPending() {
  return { type: RESET_PASSWORD_PENDING };
};

var resetPasswordSuccess = exports.resetPasswordSuccess = function resetPasswordSuccess(email) {
  return { type: RESET_PASSWORD_SUCCESS, email: email };
};

var resetPasswordError = exports.resetPasswordError = function resetPasswordError(error) {
  return { type: RESET_PASSWORD_ERROR, error: error };
};

var updatePasswordPending = exports.updatePasswordPending = function updatePasswordPending() {
  return { type: UPDATE_PASSWORD_PENDING };
};

var updatePasswordSuccess = exports.updatePasswordSuccess = function updatePasswordSuccess(email) {
  return { type: UPDATE_PASSWORD_SUCCESS, email: email };
};

var updatePasswordError = exports.updatePasswordError = function updatePasswordError(error) {
  return { type: UPDATE_PASSWORD_ERROR, error: error };
};

var registerPending = exports.registerPending = function registerPending() {
  return { type: REGISTER_PENDING };
};

var registerSuccess = exports.registerSuccess = function registerSuccess(email) {
  return { type: REGISTER_SUCCESS, email: email };
};

var registerError = exports.registerError = function registerError(error) {
  return { type: REGISTER_ERROR, error: error };
};

var updateRole = exports.updateRole = function updateRole(role) {
  return { type: UPDATE_ROLE, role: role };
};

var setInitialized = exports.setInitialized = function setInitialized() {
  return { type: SET_INITIALIZED };
};

var clearError = exports.clearError = function clearError() {
  return { type: CLEAR_ERROR };
};

var clearLocalStorage = exports.clearLocalStorage = function clearLocalStorage() {
  return function (dispatch) {
    localStorage.removeItem('app-accounts');
  };
};