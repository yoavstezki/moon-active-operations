import forIn from 'lodash/forIn';

export default values => {
  const errors = {};

  forIn(values, (value, key) => {
    if (!value) {
      errors[key] = 'required';
    }
  });

  return errors;
}
