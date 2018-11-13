'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var options = _ref.options,
      field = _ref.field,
      form = _ref.form,
      placeholder = _ref.placeholder;
  return _react2.default.createElement(_reactSelect2.default, {
    theme: function theme(_theme) {
      return _extends({}, _theme, {
        borderRadius: 0
      });
    },
    options: options,
    name: field.name,
    value: options ? options.find(function (option) {
      return option.value === field.value;
    }) : '',
    onChange: function onChange(option) {
      return form.setFieldValue(field.name, option.value);
    },
    onBlur: field.onBlur,
    placeholder: placeholder
  });
};