const mongoose = require('mongoose');
const operationSchema = require('../schemas/operation');

const Operation = mongoose.model('Operation', operationSchema);

module.exports = Operation;


