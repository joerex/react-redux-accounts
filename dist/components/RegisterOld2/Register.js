'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Register = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formik = require('formik');

var _yup = require('yup');

var Yup = _interopRequireWildcard(_yup);

var _gcloud = require('../../actions/gcloud.api');

var _reducer = require('../../reducer');

var _reactRedux = require('react-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  firstName: Yup.string().min(2, 'Must be longer than 2 characters').max(20, 'Nice try, nobody has a first name that long').required('Required'),
  lastName: Yup.string().min(2, 'Must be longer than 2 characters').max(20, 'Nice try, nobody has a last name that long').required('Required'),
  password: Yup.string().min(8, 'Must be longer than 8 characters').max(64, 'Password is too long').required('Required')
});

var Register = exports.Register = function Register(props) {
  var error = props.error,
      dispatch = props.dispatch,
      action = props.action;


  var emailValidation = function emailValidation(email) {
    return (0, _gcloud.validateEmail)(email).then(function (response) {
      return response;
    });
  };

  return _react2.default.createElement(_formik.Formik, {
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: ''
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: RegisterSchema,
    onSubmit: function onSubmit(values) {
      return dispatch(action(values));
    },
    render: function render(_ref) {
      var errors = _ref.errors,
          touched = _ref.touched,
          isValidating = _ref.isValidating;
      return _react2.default.createElement(
        _formik.Form,
        null,
        _react2.default.createElement(_formik.Field, { name: 'firstName', placeholder: 'First Name', type: 'text' }),
        _react2.default.createElement(_formik.ErrorMessage, { name: 'firstName', component: 'div', className: 'alert alert-danger' }),
        _react2.default.createElement(_formik.Field, { name: 'lastName', placeholder: 'Last Name', type: 'text' }),
        _react2.default.createElement(_formik.ErrorMessage, { name: 'lastName', component: 'div', className: 'alert alert-danger' }),
        _react2.default.createElement(_formik.Field, { validate: emailValidation, name: 'email', placeholder: 'Email', type: 'email' }),
        _react2.default.createElement(_formik.ErrorMessage, { name: 'email', component: 'div', className: 'alert alert-danger' }),
        _react2.default.createElement(_formik.Field, { name: 'password', placeholder: 'Password', type: 'password' }),
        _react2.default.createElement(_formik.ErrorMessage, { name: 'password', component: 'div', className: 'alert alert-danger' }),
        _react2.default.createElement(
          'button',
          { type: 'submit' },
          'Submit ',
          isValidating && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' }),
          ' '
        ),
        error && _react2.default.createElement(
          'div',
          { className: 'alert alert-danger' },
          error.message
        )
      );
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: (0, _reducer.getAuthError)(state),
    registerSuccess: (0, _reducer.getAuthRegisterSuccess)(state),
    token: (0, _reducer.getAuthToken)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Register);