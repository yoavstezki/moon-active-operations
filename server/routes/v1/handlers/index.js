const getOperations = require('./getOperations');
const updateOperation = require('./updateOperation');
const deleteOperation = require('./deleteOperation');
const insertOperations = require('./insertOperations');
const duplicateOperation = require('./duplicateOperation');
const getOperationSchema = require('./getOperationSchema');

module.exports = {
  getOperations,
  updateOperation,
  deleteOperation,
  insertOperations,
  duplicateOperation,
  getOperationSchema,
}
