import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core';
import { useField } from 'formik';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
  asterisk: {
    color: theme.palette.error.main,
  },
}));

const DateField = ({ name, label, required }) => {
  const classes = useStyles();

  const [field, meta, helpers] = useField(name);

  const { value, error } = meta;
  const { setValue } = helpers;

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          name={name}
          label={label}
          format="MM/dd/yyyy"
          value={value}
          onChange={val => setValue(val)}
          InputLabelProps={{ required: required, classes: { asterisk: classes.asterisk }, error: !!error }}
          InputProps={{ error: !!error }}
        />
      </MuiPickersUtilsProvider>
      {error && <FormHelperText error={error}>{error}</FormHelperText>}
    </React.Fragment>
  );
};

export default DateField;
