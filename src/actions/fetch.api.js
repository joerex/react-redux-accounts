import {
  loginSuccess,
  logoutSuccess,
  loginFailed,
  registerFailed,
  registerSuccess,
  loginPending,
  logoutPending,
  resetPasswordFailed,
  resetPasswordSuccess,
  updatePasswordFailed,
  updatePasswordSuccess, logoutFailed
} from "./index";

const API_ROOT = process.env.REACT_APP_API_ROOT || '';

export const updateAuth = () => {
  return dispatch => {
    const authString = localStorage.getItem('wkcollection');

    if (authString) {
      const authData = authString.split(',');
      dispatch(loginSuccess({
        username: authData[1],
        token: authData[0],
        role: {value: authData[2], label: authData[3]}
      }));
    }
    else {
      dispatch(logoutSuccess());
    }
  }
};

export const login = (params) => {
  return async dispatch => {
    dispatch(loginPending());

    const authString = localStorage.getItem('wkcollection');

    if (authString) {
      const authData = authString.split(',');
      dispatch(loginSuccess({
        username: authData[1],
        token: authData[0],
        role: {value: authData[2], label: authData[3]}
      }));
    }

    const form = new FormData();
    form.append("identity", params.username);
    form.append("password", params.password);

    try {
      const response = await fetch(API_ROOT + '/api/login', {
        body: form,
        method: 'POST',
      });

      if (!response.ok) {
        dispatch(loginFailed(response.message));
      }
      else {
        const data = await response.json();
        const authString = [data.success.token, data.username, data.success.rolevalue, data.success.rolelabel];
        localStorage.setItem('wkcollection', authString);
        dispatch(loginSuccess({
          username: params.username,
          token: data.success.token,
          role: {value: response.rolevalue, label: response.rolelabel}
        }))
      }
    }
    catch (error) {
      dispatch(loginFailed(error || 'Login failed'))
    }
  }
};

export const logout = (token) => {
  return async dispatch => {
    dispatch(logoutPending());

    try {
      const response = await fetch(API_ROOT + '/api/logout', {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });

      if (!response.ok) {
        dispatch(logoutFailed());
      }
      else {
        dispatch(logoutSuccess())
      }
    }
    catch (error) {
      dispatch(logoutFailed());
    }
  }
};

export const register = (params) => {
  return async dispatch => {
    dispatch(registerPending());

    const form = new FormData();
    form.append("name", params.username);
    form.append("email", params.email);
    form.append("password", params.password);
    form.append("c_password", params.password);

    debugger;

    try {
      const response = await fetch(API_ROOT + '/api/register', {
        method: "POST",
        body: form
      });

      if (!response.ok) {
        dispatch(registerFailed(response.code));
      }
      else {
        const data = await response.json();
        dispatch(registerSuccess(params.email));
      }
    }
    catch (error) {
      dispatch(registerFailed(error))
    }
  }
};

export const resetPassword = (params) => {
  return dispatch => {

  }
};

export const updatePassword = (params) => {
  return dispatch => {

  }
};