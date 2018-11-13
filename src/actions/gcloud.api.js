import firebase from '../firebase';

import {
  updateRole,
  loginError,
  loginPending,
  registerPending,
  logoutError,
  registerError,
  registerSuccess,
  setInitialized, logoutPending
} from './index';

const API_ROOT = process.env.REACT_APP_API_ROOT || '';

export const getRole = (user) => {
  return dispatch => {
    const metadataRef = firebase.database.ref('metadata/' + user.uid + '/refreshTime');
    metadataRef.on('value', snapshot => {
      user.getIdTokenResult(true)
      .then((idTokenResult) => {
        dispatch(updateRole({
          isClient: idTokenResult.claims.isClient || false,
          isAdmin: idTokenResult.claims.isAdmin || false,
          isMember: idTokenResult.claims.isMember || false,
          isManager: idTokenResult.claims.isManager || false,
          emailVerified: idTokenResult.claims.email_verified,
          token: idTokenResult.token
        }));
        dispatch(setInitialized());
      });
    });
  }
};

export const register = params => {
  return dispatch => {
    dispatch(registerPending());
    firebase.auth.createUserWithEmailAndPassword(params.email, params.password)
    .catch(error => dispatch(registerError(error)));
  };
};

export const acceptInvite = (params, uid, token) => {
  return dispatch => {
    dispatch(registerPending());
    fetch(API_ROOT + '/acceptInvite', {
      method: 'POST',
      body: JSON.stringify({...params, uid, token}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if (response.ok) {
        //history.push('/login');
      }
      else {
        return response.json();
      }
    })
    .catch(error => dispatch(registerError(error)))
  };
};

export const adminRegister = (params, token, reset) => {
  return dispatch => {
    dispatch(registerPending());
    fetch(API_ROOT + '/inviteUser', {
      method: 'POST',
      body: JSON.stringify({...params, token}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if (response.ok) {
        dispatch(registerSuccess());
        reset();
      }
      else {
        return response.json();
      }
    })
    .catch(error => dispatch(registerError(error)))
  };
};

export const login = params => {
  return dispatch => {
    dispatch(loginPending());
    firebase.auth.signInWithEmailAndPassword(params.username, params.password)
    .catch(error => {
      dispatch(loginError(error));
    });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(logoutPending());
    firebase.auth.signOut()
      .catch(error => {
        dispatch(logoutError(error));
      });
  }
};

export const validateEmail = email => {
  return fetch(API_ROOT + '/validateEmail', {
    method: 'POST',
    body: JSON.stringify({email}),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(response => response.message)
  .catch(error => console.log(error));
};