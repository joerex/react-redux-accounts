import React from 'react';
import Select from 'react-select';

export default ({
  options,
  field,
  form,
  placeholder
}) => (
  <Select
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
    })}
    options={options}
    name={field.name}
    value={options ? options.find(option => option.value === field.value) : ''}
    onChange={(option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
    placeholder={placeholder}
  />
);