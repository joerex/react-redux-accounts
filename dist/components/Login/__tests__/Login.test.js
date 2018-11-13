'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Login = require('../Login');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Login Component', function () {

  it('should render without throwing an error', function () {
    expect((0, _enzyme.shallow)(_react2.default.createElement(_Login.LoginComponent, null)).find('div.login form').exists()).toBe(true);
  });

  it('renders a email input', function () {
    expect((0, _enzyme.shallow)(_react2.default.createElement(_Login.LoginComponent, null)).find('input[name="username"]').length).toEqual(1);
  });

  it('renders a password input', function () {
    expect((0, _enzyme.shallow)(_react2.default.createElement(_Login.LoginComponent, null)).find('input[name="password"]').length).toEqual(1);
  });
});