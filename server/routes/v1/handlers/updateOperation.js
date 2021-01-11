const reduce = require('lodash/reduce');
const Operation = require('../../../models/operation');

module.exports = async (req, res) => {
  const { id } = req.params;

  const schema = Operation.schema.obj;

  const updateBody = reduce(req.body, (result, value, key) => {
    const { type } = schema[key];

    if(type === 'Date') {
      Object.assign(result, { [key]: new Date(value) });
    }
    Object.assign(result, { [key]: value });
    return result;
  }, {});

  const operation = await Operation.updateOne({ _id: id }, updateBody);

  res.send(operation);
}
