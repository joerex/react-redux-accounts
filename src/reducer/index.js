import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  UPDATE_PASSWORD_FAILED,
  UPDATE_PASSWORD_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REQUEST_LOGIN_PENDING,
  REQUEST_LOGOUT_PENDING,
  REQUEST_REGISTER_PENDING
} from '../actions/index';

export const defaultAuthState = {
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
};

const authReducer = (state = defaultAuthState, action) => {
  switch(action.type) {
    case REQUEST_LOGIN_PENDING:
    case REQUEST_LOGOUT_PENDING:
    case REQUEST_REGISTER_PENDING:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        failedAttempts: 0,
        username: action.payload.username,
        role: action.payload.role,
        token: action.payload.token,
        loading:false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        failedAttempts: ++state.failedAttempts,
        error: action.payload,
        loading:false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authenticated: false,
        failedAttempts: 0,
        username: '',
        role: null,
        loading:false,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        failedAttempts: ++state.failedAttempts,
        loading: false
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        failedResetAttempts: 0,
        email: state.email,
        resetPasswordSuccess: true
      };
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        failedResetAttempts: ++state.failedResetAttempts,
        error: action.payload,
        resetPasswordSuccess: false
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        failedResetAttempts: 0,
        email: state.email,
        updatePasswordSuccess: true
      };
    case UPDATE_PASSWORD_FAILED:
      return {
        ...state,
        failedResetAttempts: ++state.failedResetAttempts,
        error: action.payload,
        updatePasswordSuccess: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        email: state.email,
        registerSuccess: true
      };
    case REGISTER_FAILED:
      return {
        ...state,
        error: action.payload,
        registerSuccess: false
      };
    default:
      return state;
  }
};

export default authReducer;

export const getAuthToken = state => {
  return state.auth.token
};

export const getAuthLoading = state => {
  return state.auth.loading
};

export const getAuthenticated = state => {
  return state.auth.authenticated
};

export const getAuthFailedAttempts = state => {
  return state.auth.failedAttempts;
};

export const getAuthError = state => {
  return state.auth.error;
};

export const getRole = state => {
  return state.auth.role;
};

export const getAuthUpdatePasswordSuccess = state => {
  return state.auth.updatePasswordSuccess;
};

export const getAuthResetPasswordSuccess = state => {
  return state.auth.updatePasswordSuccess;
};

export const getAuthRegisterSuccess = state => {
  return state.auth.updatePasswordSuccess;
};

export const getUser = state => {
  return state.auth.authenticated && {
    username: state.auth.username,
    role: state.auth.role
  };
};
