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

var ResetPasswordComponent = function (_Component) {
  _inherits(ResetPasswordComponent, _Component);

  function ResetPasswordComponent(props) {
    _classCallCheck(this, ResetPasswordComponent);

    var _this = _possibleConstructorReturn(this, (ResetPasswordComponent.__proto__ || Object.getPrototypeOf(ResetPasswordComponent)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.state = { password: '', resetToken: '' };
    return _this;
  }

  _createClass(ResetPasswordComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.token = this.props.token;
      this.forceUpdate();
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      (0, _index.updatePassword)(this.props.dispatch, { password: this.state.password, token: this.token });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'reset-password center-form' },
        !this.props.updatePasswordSuccess && this.token && _react2.default.createElement(
          'div',
          { className: 'alert alert-info' },
          'Enter a new password.'
        ),
        this.props.updatePasswordSuccess && _react2.default.createElement(
          'div',
          { className: 'alert alert-success' },
          'Your password has been reset.'
        ),
        !this.token && _react2.default.createElement(
          'div',
          { className: 'alert alert-danger' },
          'There is no token.'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { name: 'password',
            type: 'password',
            value: this.state.password,
            onChange: function onChange(e) {
              return _this2.setState({ password: e.target.value });
            },
            placeholder: 'Password' }),
          _react2.default.createElement('input', { type: 'submit', value: 'Reset Password', className: 'btn btn-block btn-brand', disabled: !this.token }),
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

  return ResetPasswordComponent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    failedResetAttempts: (0, _index2.getAuthFailedAttempts)(state),
    error: (0, _index2.getAuthError)(state),
    updatePasswordSuccess: (0, _index2.getAuthUpdatePasswordSuccess)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};

var ResetPassword = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ResetPasswordComponent);

exports.default = ResetPassword;