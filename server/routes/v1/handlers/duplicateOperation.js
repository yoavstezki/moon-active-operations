const pick = require('lodash/pick');
const Operation = require('../../../models/operation');

module.exports = async (req, res) => {
  const { id } = req.params;

  const operation = await Operation.findOne({ _id: id });
  const duplicateOperation = pick(operation.toObject(), Object.keys(Operation.schema.obj))
  const duplicate = await new Operation(duplicateOperation).save();

  res.send(duplicate.toObject());
}
