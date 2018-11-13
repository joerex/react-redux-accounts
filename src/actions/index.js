export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const RESET_PASSWORD_PENDING = 'RESET_PASSWORD_PENDING';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';
export const UPDATE_PASSWORD_PENDING = 'UPDATE_PASSWORD_PENDING';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_ERROR = 'UPDATE_PASSWORD_ERROR';
export const REGISTER_PENDING = 'REQUEST_REGISTER_PENDING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const UPDATE_ROLE = 'UPDATE_ROLE';
export const SET_INITIALIZED = 'SET_INITIALIZED';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const loginPending = () => {
  return {type: LOGIN_PENDING};
};

export const loginSuccess = user => {
  return {type: LOGIN_SUCCESS, user};
};

export const loginError = error => {
  return {type: LOGIN_ERROR, error};
};

export const logoutPending = () => {
  return {type: LOGOUT_PENDING};
};

export const logoutSuccess = () => {
  return {type: LOGOUT_SUCCESS};
};

export const logoutError = error => {
  return {type: LOGOUT_ERROR, error};
};

export const resetPasswordPending = () => {
  return {type: RESET_PASSWORD_PENDING}
};

export const resetPasswordSuccess = email => {
  return {type: RESET_PASSWORD_SUCCESS, email};
};

export const resetPasswordError = error => {
  return {type: RESET_PASSWORD_ERROR, error};
};

export const updatePasswordPending = () => {
  return {type: UPDATE_PASSWORD_PENDING};
};

export const updatePasswordSuccess = email => {
  return {type: UPDATE_PASSWORD_SUCCESS, email};
};

export const updatePasswordError = error => {
  return {type: UPDATE_PASSWORD_ERROR, error};
};

export const registerPending = () => {
  return {type: REGISTER_PENDING};
};

export const registerSuccess = email => {
  return {type: REGISTER_SUCCESS, email};
};

export const registerError = error => {
  return {type: REGISTER_ERROR, error};
};

export const updateRole = role => {
  return {type: UPDATE_ROLE, role};
};

export const setInitialized = () => {
  return {type: SET_INITIALIZED}
};

export const clearError = () => {
  return {type: CLEAR_ERROR};
};

export const clearLocalStorage = () => {
  return dispatch => {
    localStorage.removeItem('app-accounts');
  };
};