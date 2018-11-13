## React + Redux Accounts
Components and state management for functionality related to app accounts: login, logout, register, reset password.

#### Components

```js
import {
  Login,
  Logout,
  Register,
  ForgotPassword,
  ResetPassword
} from 'react-redux-accounts/dist/components';
```
#### Reducer

```js
import {authReducer} from 'react-redux-accounts/dist/reducer';
```

#### Actions

```js
import {
  loginPending,
  loginSuccess,
  loginFailed,
  logoutPending,
  logoutSuccess,
  logoutFailed,
  registerPending,
  registerSuccess,
  registerFailed,
  resetPasswordSuccess,
  resetPasswordFailed,
  updatePasswordSuccess,
  updatePasswordFailed,
} from 'react-redux-accounts/dist/actions';
```

#### Selectors

```js
import {
  getAuthLoading,
  getAuthenticated,
  getAuthFailedAttempts,
  getAuthError,
  getRole,
  getAuthUpdatePasswordSuccess,
  getAuthResetPasswordSuccess,
  getAuthRegisterSuccess,
  getUser
} from 'react-redux-accounts/dist/reducer';
```