'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEmail = exports.logout = exports.login = exports.adminRegister = exports.acceptInvite = exports.register = exports.getRole = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _firebase = require('../firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_ROOT = process.env.REACT_APP_API_ROOT || '';

var getRole = exports.getRole = function getRole(user) {
  return function (dispatch) {
    var metadataRef = _firebase2.default.database.ref('metadata/' + user.uid + '/refreshTime');
    metadataRef.on('value', function (snapshot) {
      user.getIdTokenResult(true).then(function (idTokenResult) {
        dispatch((0, _index.updateRole)({
          isClient: idTokenResult.claims.isClient || false,
          isAdmin: idTokenResult.claims.isAdmin || false,
          isMember: idTokenResult.claims.isMember || false,
          isManager: idTokenResult.claims.isManager || false,
          emailVerified: idTokenResult.claims.email_verified,
          token: idTokenResult.token
        }));
        dispatch((0, _index.setInitialized)());
      });
    });
  };
};

var register = exports.register = function register(params) {
  return function (dispatch) {
    dispatch((0, _index.registerPending)());
    _firebase2.default.auth.createUserWithEmailAndPassword(params.email, params.password).catch(function (error) {
      return dispatch((0, _index.registerError)(error));
    });
  };
};

var acceptInvite = exports.acceptInvite = function acceptInvite(params, uid, token) {
  return function (dispatch) {
    dispatch((0, _index.registerPending)());
    fetch(API_ROOT + '/acceptInvite', {
      method: 'POST',
      body: JSON.stringify(_extends({}, params, { uid: uid, token: token })),
      headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        //history.push('/login');
      } else {
        return response.json();
      }
    }).catch(function (error) {
      return dispatch((0, _index.registerError)(error));
    });
  };
};

var adminRegister = exports.adminRegister = function adminRegister(params, token, reset) {
  return function (dispatch) {
    dispatch((0, _index.registerPending)());
    fetch(API_ROOT + '/inviteUser', {
      method: 'POST',
      body: JSON.stringify(_extends({}, params, { token: token })),
      headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        dispatch((0, _index.registerSuccess)());
        reset();
      } else {
        return response.json();
      }
    }).catch(function (error) {
      return dispatch((0, _index.registerError)(error));
    });
  };
};

var login = exports.login = function login(params) {
  return function (dispatch) {
    dispatch((0, _index.loginPending)());
    _firebase2.default.auth.signInWithEmailAndPassword(params.username, params.password).catch(function (error) {
      dispatch((0, _index.loginError)(error));
    });
  };
};

var logout = exports.logout = function logout() {
  return function (dispatch) {
    dispatch((0, _index.logoutPending)());
    _firebase2.default.auth.signOut().catch(function (error) {
      dispatch((0, _index.logoutError)(error));
    });
  };
};

var validateEmail = exports.validateEmail = function validateEmail(email) {
  return fetch(API_ROOT + '/validateEmail', {
    method: 'POST',
    body: JSON.stringify({ email: email }),
    headers: { 'Content-Type': 'application/json' }
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response.message;
  }).catch(function (error) {
    return console.log(error);
  });
};