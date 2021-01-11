import React from 'react';
import TextField from './TextField';
import DateField from './DateField';
import SelectField from './SelectField';

const FormField = ({ type, name, required, label, options }) => {
  switch (type) {
    case 'String': {
      if (options) {
        return (
          <SelectField name={name} required={required} label={label} options={options} />
        );
      }
      return (
        <TextField name={name} required={required} label={label} />
      );
    }
    case 'Date': {
      return (
        <DateField name={name} label={label} required={required} />
      );
    }
    default:
      return null;
  }
};

export default FormField;
