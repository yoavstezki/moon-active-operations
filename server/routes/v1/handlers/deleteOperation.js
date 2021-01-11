const Operation = require('../../../models/operation');

module.exports = async (req, res) => {
  const { id } = req.params;

  await Operation.deleteOne({ _id: id })
  res.send({ _id: id });
}
