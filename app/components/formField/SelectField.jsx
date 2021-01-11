import startCase from 'lodash/startCase';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useField } from 'formik';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 220,
  },
  asterisk: {
    color: theme.palette.error.main,
  },
}));

const SelectField = ({ name, options, required, label }) => {
  const classes = useStyles();

  const [field, meta] = useField(name);
  const { onChange } = field;
  const { value, error } = meta;

  return (
    <FormControl className={classes.formControl} required={required} error={error}>
      <InputLabel classes={{ asterisk: classes.asterisk }}>{label}</InputLabel>
      <Select name={name} value={value} onChange={onChange}>
        {
          options.map((option, index) => (
            <MenuItem key={`${option}_${index}`} value={option}>
              {startCase(option)}
            </MenuItem>
          ))
        }
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;
