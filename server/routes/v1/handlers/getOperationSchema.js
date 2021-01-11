const reduce = require('lodash/reduce');
const Operation = require('../../../models/operation');

module.exports = (req, res) => {
  const schema = reduce(Operation.schema.obj, (result, value, key) => {
    result.push({ key, type: value.type.name, options: value.enum, required: value.required });
    return result;
  }, []);

  res.send(schema);
};
