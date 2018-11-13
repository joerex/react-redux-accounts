'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _index = require('../../reducer/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultRegisterFields = {
  email: { name: 'email', type: 'text', placeholder: 'Email' },
  username: { name: 'username', type: 'text', placeholder: 'Username' },
  password: { name: 'password', type: 'password', placeholder: 'Password' }
};

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    //this.state = {username: '', password: '', email: '', type: null};
    _this.fields = props.fields || defaultRegisterFields;
    _this.state = Object.keys(_this.fields).reduce(function (accumulator, field) {
      return _extends({}, accumulator, _defineProperty({}, _this.fields[field].name, _this.fields[field].value || ''));
    }, {});
    return _this;
  }

  _createClass(Register, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      this.props.dispatch(this.props.action(this.state, this.props.token));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fields = Object.keys(this.fields).map(function (field, i) {
        return _react2.default.createElement(
          'div',
          { key: i },
          (_this2.fields[field].type === 'text' || _this2.fields[field].type === 'password') && _react2.default.createElement('input', { name: _this2.fields[field].name,
            type: _this2.fields[field].type,
            value: _this2.state[field.name],
            onChange: _this2.handleInputChange,
            placeholder: _this2.fields[field].placeholder }),
          _this2.fields[field].type === 'select' && _react2.default.createElement(_reactSelect2.default, {
            name: _this2.fields[field].name,
            className: 'Select',
            placeholder: _this2.fields[field].placeholder,
            openOnFocus: true,
            value: _this2.state[field.name],
            onChange: function onChange(e) {
              return _this2.handleInputChange({ target: { name: field.name, value: field.value } });
            },
            options: _this2.fields[field].options
          })
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'register center-form' },
        this.props.registerSuccess && _react2.default.createElement(
          'div',
          { className: 'alert alert-success' },
          'Your account has been created. Please go ',
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Login'
          )
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          fields,
          _react2.default.createElement('input', { type: 'submit', value: 'Register', className: 'btn btn-block btn-brand' }),
          this.props.failedAttempts > 0 && _react2.default.createElement(
            'div',
            { className: 'alert alert-danger' },
            'Incorrect username or password',
            this.props.error && _react2.default.createElement(
              'span',
              { className: 'error' },
              this.props.error
            )
          )
        )
      );
    }
  }]);

  return Register;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: (0, _index.getAuthError)(state),
    registerSuccess: (0, _index.getAuthRegisterSuccess)(state),
    token: (0, _index.getAuthToken)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Register);