"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetPassword = exports.ForgotPassword = exports.Register = exports.Logout = exports.Login = undefined;

var _Login = require("./Login/Login");

var _Login2 = _interopRequireDefault(_Login);

var _Logout = require("./Logout/Logout");

var _Logout2 = _interopRequireDefault(_Logout);

var _Register = require("./Register/Register");

var _Register2 = _interopRequireDefault(_Register);

var _ForgotPassword = require("./ForgotPassword/ForgotPassword");

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

var _ResetPassword = require("./ResetPassword/ResetPassword");

var _ResetPassword2 = _interopRequireDefault(_ResetPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = exports.Login = _Login2.default;
var Logout = exports.Logout = _Logout2.default;
var Register = exports.Register = _Register2.default;
var ForgotPassword = exports.ForgotPassword = _ForgotPassword2.default;
var ResetPassword = exports.ResetPassword = _ResetPassword2.default;