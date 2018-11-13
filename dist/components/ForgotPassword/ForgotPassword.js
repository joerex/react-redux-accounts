'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../actions/index');

var _reactRedux = require('react-redux');

var _index2 = require('../../reducer/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForgotPasswordComponent = function (_Component) {
  _inherits(ForgotPasswordComponent, _Component);

  function ForgotPasswordComponent(props) {
    _classCallCheck(this, ForgotPasswordComponent);

    var _this = _possibleConstructorReturn(this, (ForgotPasswordComponent.__proto__ || Object.getPrototypeOf(ForgotPasswordComponent)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.state = { email: '' };
    return _this;
  }

  _createClass(ForgotPasswordComponent, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      (0, _index.resetPassword)(this.props.dispatch, { email: this.state.email });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'forgot-password center-form' },
        this.props.resetSuccess && _react2.default.createElement(
          'div',
          { className: 'alert alert-success' },
          'A password reset link has been sent to your email.'
        ),
        !this.props.resetSuccess && _react2.default.createElement(
          'div',
          { className: 'alert alert-info' },
          'Enter your email to have a password reset link sent to your email.'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { name: 'email',
            type: 'text',
            value: this.state.email,
            onChange: function onChange(e) {
              return _this2.setState({ email: e.target.value });
            },
            placeholder: 'Email' }),
          _react2.default.createElement('input', { type: 'submit', value: 'Reset Password', className: 'btn btn-block btn-brand' }),
          this.props.failedAttempts > 0 && _react2.default.createElement(
            'span',
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

  return ForgotPasswordComponent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    failedAttempts: (0, _index2.getAuthFailedAttempts)(state),
    error: (0, _index2.getAuthError)(state),
    resetSuccess: (0, _index2.getAuthResetPasswordSuccess)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};

var ForgotPassword = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ForgotPasswordComponent);

exports.default = ForgotPassword;