'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.getAuthRegisterSuccess = exports.getAuthResetPasswordSuccess = exports.getAuthUpdatePasswordSuccess = exports.getRole = exports.getAuthError = exports.getAuthFailedAttempts = exports.getAuthenticated = exports.getAuthLoading = exports.getAuthToken = exports.defaultAuthState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('../actions');

var defaultAuthState = exports.defaultAuthState = {
  loading: true,
  authenticated: false,
  failedAttempts: 0,
  error: null,
  username: '',
  role: null,
  token: null,
  updatePasswordSuccess: false,
  resetPasswordSuccess: false,
  registerSuccess: false,
  user: null
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAuthState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.LOGIN_SUCCESS:
      return _extends({}, state, {
        authenticated: true,
        failedAttempts: 0,
        username: action.user.username,
        role: action.user.role,
        token: action.user.token,
        loading: false
      });
    case _actions.LOGIN_ERROR:
      return _extends({}, state, {
        failedAttempts: ++state.failedAttempts,
        error: action.error,
        loading: false
      });
    case _actions.LOGOUT_SUCCESS:
      return _extends({}, state, {
        authenticated: false,
        failedAttempts: 0,
        user: null,
        username: '',
        role: null,
        loading: false
      });
    case _actions.LOGOUT_ERROR:
      return _extends({}, state, {
        failedAttempts: ++state.failedAttempts,
        loading: false
      });
    case _actions.RESET_PASSWORD_SUCCESS:
      return _extends({}, state, {
        failedResetAttempts: 0,
        email: state.email,
        resetPasswordSuccess: true
      });
    case _actions.RESET_PASSWORD_ERROR:
      return _extends({}, state, {
        failedResetAttempts: ++state.failedResetAttempts,
        error: action.error
      });
    case _actions.UPDATE_PASSWORD_SUCCESS:
      return _extends({}, state, {
        failedResetAttempts: 0,
        email: state.email,
        updatePasswordSuccess: true
      });
    case _actions.UPDATE_PASSWORD_ERROR:
      return _extends({}, state, {
        failedResetAttempts: ++state.failedResetAttempts,
        error: action.error
      });
    case _actions.REGISTER_SUCCESS:
      return _extends({}, state, {
        registerSuccess: true
      });
    case _actions.REGISTER_ERROR:
      return _extends({}, state, {
        error: action.error,
        registerSuccess: false
      });
    case _actions.UPDATE_ROLE:
      return _extends({}, state, {
        user: _extends({}, state.user, action.role)
      });
    case _actions.SET_INITIALIZED:
      return _extends({}, state, {
        loading: false
      });
    case _actions.CLEAR_ERROR:
      return _extends({}, state, {
        error: null
      });
    default:
      return state;
  }
};

exports.default = authReducer;
var getAuthToken = exports.getAuthToken = function getAuthToken(state) {
  return state.auth.token;
};

var getAuthLoading = exports.getAuthLoading = function getAuthLoading(state) {
  return state.auth.loading;
};

var getAuthenticated = exports.getAuthenticated = function getAuthenticated(state) {
  return state.auth.authenticated;
};

var getAuthFailedAttempts = exports.getAuthFailedAttempts = function getAuthFailedAttempts(state) {
  return state.auth.failedAttempts;
};

var getAuthError = exports.getAuthError = function getAuthError(state) {
  if (state.auth.error && state.auth.error.message) {
    return state.auth.error.message;
  } else if (state.auth.error && typeof state.auth.error === 'string') {
    return state.auth.error;
  } else if (state.auth.error) {
    return 'Something went wrong...';
  } else {
    return null;
  }
};

var getRole = exports.getRole = function getRole(state) {
  return state.auth.role;
};

var getAuthUpdatePasswordSuccess = exports.getAuthUpdatePasswordSuccess = function getAuthUpdatePasswordSuccess(state) {
  return state.auth.updatePasswordSuccess;
};

var getAuthResetPasswordSuccess = exports.getAuthResetPasswordSuccess = function getAuthResetPasswordSuccess(state) {
  return state.auth.updatePasswordSuccess;
};

var getAuthRegisterSuccess = exports.getAuthRegisterSuccess = function getAuthRegisterSuccess(state) {
  return state.auth.registerSuccess;
};

var getUser = exports.getUser = function getUser(state) {
  return state.auth.user;
};