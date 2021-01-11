const Operation = require('../../../models/operation');

module.exports = async (req, res) => {
  const { skip, limit } = req.query;

  const operations = await Operation.find({})
    .sort({ startDate: -1 })
    .skip(+skip)
    .limit(+limit)
    .select({ __v: 0, insertTs: 0, updateTs: 0 });

  const totalCount = await Operation.find({}).count();

  res.send({ operations, totalCount });
};
