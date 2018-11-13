'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reducer = require('../../reducer');

var _actions = require('../../actions');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginComponent = exports.LoginComponent = function (_Component) {
  _inherits(LoginComponent, _Component);

  function LoginComponent(props) {
    _classCallCheck(this, LoginComponent);

    var _this = _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.state = { username: '', password: '' };
    return _this;
  }

  _createClass(LoginComponent, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.dispatch(this.props.action({ username: this.state.username, password: this.state.password }));
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      if (this.props.error) {
        this.props.dispatch((0, _actions.clearError)());
      }
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'login center-form' },
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { name: 'username',
            type: 'text',
            value: this.state.username,
            onChange: this.handleInputChange,
            placeholder: 'Username' }),
          _react2.default.createElement('input', { name: 'password',
            type: 'password',
            value: this.state.password,
            onChange: this.handleInputChange,
            placeholder: 'Password' }),
          _react2.default.createElement('input', { type: 'submit', value: 'Login', className: 'btn btn-block btn-brand' }),
          this.props.error && _react2.default.createElement(
            'div',
            { className: 'alert alert-danger' },
            this.props.error
          )
        )
      );
    }
  }]);

  return LoginComponent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    failedAttempts: (0, _reducer.getAuthFailedAttempts)(state),
    error: (0, _reducer.getAuthError)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var Login = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginComponent);

exports.default = Login;