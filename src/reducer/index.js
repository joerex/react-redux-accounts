import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  UPDATE_PASSWORD_ERROR,
  UPDATE_PASSWORD_SUCCESS,
  REGISTER_PENDING,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  UPDATE_ROLE,
  SET_INITIALIZED,
  CLEAR_ERROR
} from '../actions';

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
  user: null
};

const authReducer = (state = defaultAuthState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        failedAttempts: 0,
        username: action.user.username,
        role: action.user.role,
        token: action.user.token,
        loading:false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        failedAttempts: ++state.failedAttempts,
        error: action.error,
        loading:false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authenticated: false,
        failedAttempts: 0,
        user: null,
        username: '',
        role: null,
        loading:false,
      };
    case LOGOUT_ERROR:
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
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        failedResetAttempts: ++state.failedResetAttempts,
        error: action.error,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        failedResetAttempts: 0,
        email: state.email,
        updatePasswordSuccess: true
      };
    case UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        failedResetAttempts: ++state.failedResetAttempts,
        error: action.error,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true
      };
    case REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
        registerSuccess: false
      };
    case UPDATE_ROLE:
      return {
        ...state,
        user: {...state.user, ...action.role}
      };
    case SET_INITIALIZED:
      return {
        ...state,
        loading: false
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
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
  if (state.auth.error && state.auth.error.message) {
    return state.auth.error.message;
  }
  else if (state.auth.error && typeof state.auth.error === 'string') {
    return state.auth.error;
  }
  else if (state.auth.error) {
    return 'Something went wrong...';
  }
  else {
    return null;
  }

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
  return state.auth.registerSuccess;
};

export const getUser = state => {
  return state.auth.user;
};
