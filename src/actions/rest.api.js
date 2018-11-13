import {
  loginPending,
  loginSuccess,
  loginError,
  logoutPending,
  logoutSuccess,
  logoutError,
  registerPending,
  registerSuccess,
  registerError,
  resetPasswordPending,
  resetPasswordSuccess,
  resetPasswordError,
  updatePasswordSuccess,
  updatePasswordError,
} from "./index";

const API_ROOT = process.env.REACT_APP_API_ROOT || '';

export const updateAuth = () => {
  return dispatch => {
    const authString = localStorage.getItem('app-accounts');

    if (authString) {
      const authData = authString.split(',');
      dispatch(loginSuccess({
        token: authData[0],
        username: authData[1],
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

    const authString = localStorage.getItem('app-accounts');

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
        dispatch(loginError(response.statusText));
      }
      else {
        const data = await response.json();
        const authString = [data.success.token, params.username, data.success.rolevalue, data.success.rolelabel];
        localStorage.setItem('app-accounts', authString);
        dispatch(loginSuccess({
          username: params.username,
          token: data.success.token,
          role: {value: response.rolevalue, label: response.rolelabel}
        }))
      }
    }
    catch (error) {
      dispatch(loginError(error || 'Login failed'))
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
        dispatch(logoutError());
      }
      else {
        dispatch(logoutSuccess())
      }
    }
    catch (error) {
      dispatch(logoutError());
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

    try {
      const response = await fetch(API_ROOT + '/api/register', {
        method: "POST",
        body: form
      });

      if (!response.ok) {
        const data = await response.json();
        const error = Object.keys(data.error).reduce((acc, err) => {
          return acc + data.error[err][0] + ' ';
        }, '');
        dispatch(registerError(error));
      }
      else {
        dispatch(registerSuccess(params.email));
      }
    }
    catch (error) {
      dispatch(registerError(error))
    }
  }
};

export const resetPassword = async (params) => {

};

export const updatePassword = async (params) => {

};