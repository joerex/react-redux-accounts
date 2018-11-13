'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Register = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formik = require('formik');

var _yup = require('yup');

var Yup = _interopRequireWildcard(_yup);

var _SelectField = require('../SelectField/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _reducer = require('../../reducer');

var _reactRedux = require('react-redux');

require('./Register.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Register = exports.Register = function Register(props) {
  var error = props.error,
      dispatch = props.dispatch,
      action = props.action;

  // build dom fields

  var fields = props.fields.map(function (field, i) {
    return _react2.default.createElement(
      'div',
      { key: i },
      (field.type === 'text' || field.type === 'email' || field.type === 'password') && _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_formik.Field, { name: field.name, placeholder: field.placeholder, type: field.type, validate: field.validate }),
        _react2.default.createElement(_formik.ErrorMessage, { name: field.name, component: 'div', className: 'alert alert-danger' })
      ),
      field.type === 'select' && _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_formik.Field, { name: field.name, component: _SelectField2.default, options: field.options, placeholder: field.placeholder }),
        _react2.default.createElement(_formik.ErrorMessage, { name: field.name, component: 'div', className: 'alert alert-danger' })
      )
    );
  });

  // build validation schema
  var shape = props.fields.reduce(function (accumulator, field) {
    if (field.schema) {
      return _extends({}, accumulator, _defineProperty({}, field.name, field.schema));
    } else {
      return accumulator;
    }
  }, {});

  var schema = Yup.object().shape(shape);

  // build initial values
  var initialValues = props.fields.reduce(function (accumulator, field) {
    return _extends({}, accumulator, _defineProperty({}, field.name, field.value || ''));
  }, {});

  return _react2.default.createElement(
    'div',
    { className: 'Register' },
    _react2.default.createElement(_formik.Formik, {
      initialValues: initialValues,
      validateOnBlur: false,
      validateOnChange: false,
      validationSchema: schema,
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
          fields,
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-block btn-brand' },
            'Submit ',
            isValidating && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' })
          ),
          error && _react2.default.createElement(
            'div',
            { className: 'alert alert-danger' },
            error.message
          )
        );
      }
    })
  );
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