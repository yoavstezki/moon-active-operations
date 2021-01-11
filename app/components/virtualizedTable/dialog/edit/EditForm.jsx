import React from 'react';
import { Formik } from 'formik';
import pick from 'lodash/pick';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import Button from '@material-ui/core/Button';
import FormField from '../../../formField';
import startCase from 'lodash/startCase';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    paddingTop: 16,
    height: 60,
    maxWidth: 220,
  },
  actions: {
    display: 'flex',
    paddingTop: 24,
    paddingBottom: 12,
    justifyContent: 'flex-end',
  },
  cancelBtn: {
    marginRight: 8,
  },
});

const EditForm = ({ data, schema, validate, onSubmit, onClose }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ ...pick(data.original, map(schema, 'key')) }}
      onSubmit={values => {
        onSubmit({ id: data.original._id, ...values });
        onClose();
      }}
      validate={validate}
    >
      {({ handleSubmit, handleChange, handleBlur, errors, touched, values, dirty }) => (
        <form onSubmit={handleSubmit}>
          <div className={classes.container}>
            {
              schema.map(({ key, type, options, required }, i) => {
                return (
                  <div key={`${key}_${i}`} className={classes.field}>
                    <FormField
                      name={key}
                      type={type}
                      options={options}
                      required={required}
                      label={startCase(key)}
                      error={touched[key] && errors[key]}
                      value={values[key]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                );
              })
            }
            <div className={classes.actions}>
              <Button size="small" color="primary" onClick={onClose} className={classes.cancelBtn}>
                Cancel
              </Button>
              <Button
                type="submit"
                size="small"
                color="primary"
                variant="contained"
                disabled={!isEmpty(errors) || !dirty}
              >
                Update
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default EditForm;
