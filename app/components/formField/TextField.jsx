import React from 'react';
import MuTextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import { useField } from 'formik';

const useStyles = makeStyles(theme => ({
  asterisk: {
    color: theme.palette.error.main,
  },
}));

const TextField = ({ name, required, label }) => {
  const classes = useStyles();

  const [field, meta] = useField(name);
  const { onBlur, onChange } = field;
  const { value, error } = meta;

  return (
    <MuTextField
      value={value}
      name={name}
      required={required}
      fullWidth
      label={label}
      error={error}
      helperText={error}
      onChange={onChange}
      onBlur={onBlur}
      InputLabelProps={{ classes: { asterisk: classes.asterisk } }}
    />
  );
};

export default TextField;
