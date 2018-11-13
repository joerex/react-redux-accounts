'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePassword = exports.resetPassword = exports.register = exports.logout = exports.login = exports.updateAuth = undefined;

var _index = require('./index');

var API_ROOT = process.env.REACT_APP_API_ROOT || '';

var updateAuth = exports.updateAuth = function updateAuth() {
  return function (dispatch) {
    var authString = localStorage.getItem('app-accounts');

    if (authString) {
      var authData = authString.split(',');
      dispatch((0, _index.loginSuccess)({
        token: authData[0],
        username: authData[1],
        role: { value: authData[2], label: authData[3] }
      }));
    } else {
      dispatch((0, _index.logoutSuccess)());
    }
  };
};

var login = exports.login = function login(params) {
  return async function (dispatch) {
    dispatch((0, _index.loginPending)());

    var authString = localStorage.getItem('app-accounts');

    if (authString) {
      var authData = authString.split(',');
      dispatch((0, _index.loginSuccess)({
        username: authData[1],
        token: authData[0],
        role: { value: authData[2], label: authData[3] }
      }));
    }

    var form = new FormData();
    form.append("identity", params.username);
    form.append("password", params.password);

    try {
      var response = await fetch(API_ROOT + '/api/login', {
        body: form,
        method: 'POST'
      });

      if (!response.ok) {
        dispatch((0, _index.loginError)(response.statusText));
      } else {
        var data = await response.json();
        var _authString = [data.success.token, params.username, data.success.rolevalue, data.success.rolelabel];
        localStorage.setItem('app-accounts', _authString);
        dispatch((0, _index.loginSuccess)({
          username: params.username,
          token: data.success.token,
          role: { value: response.rolevalue, label: response.rolelabel }
        }));
      }
    } catch (error) {
      dispatch((0, _index.loginError)(error || 'Login failed'));
    }
  };
};

var logout = exports.logout = function logout(token) {
  return async function (dispatch) {
    dispatch((0, _index.logoutPending)());

    try {
      var response = await fetch(API_ROOT + '/api/logout', {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });

      if (!response.ok) {
        dispatch((0, _index.logoutError)());
      } else {
        dispatch((0, _index.logoutSuccess)());
      }
    } catch (error) {
      dispatch((0, _index.logoutError)());
    }
  };
};

var register = exports.register = function register(params, token) {
  return async function (dispatch) {
    dispatch((0, _index.registerPending)());

    var form = new FormData();
    form.append("name", params.username);
    form.append("email", params.email);
    form.append("password", params.password);
    form.append("c_password", params.password);

    try {
      var response = await fetch(API_ROOT + '/api/register', {
        method: "POST",
        body: form
      });

      if (!response.ok) {
        var data = await response.json();
        var error = Object.keys(data.error).reduce(function (acc, err) {
          return acc + data.error[err][0] + ' ';
        }, '');
        dispatch((0, _index.registerError)(error));
      } else {
        dispatch((0, _index.registerSuccess)(params.email));
      }
    } catch (error) {
      dispatch((0, _index.registerError)(error));
    }
  };
};

var resetPassword = exports.resetPassword = async function resetPassword(params) {};

var updatePassword = exports.updatePassword = async function updatePassword(params) {};