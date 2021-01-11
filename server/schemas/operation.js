const mongoose = require('mongoose');

const { OPERATION_TYPES } = require('../enums') ;

const operation = mongoose.Schema({
  name: { type: String, required: true, },
  type: { type: String, enum: OPERATION_TYPES, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  userGroupName: { type: String, required: true },
}, { timestamps: true });

module.exports = operation;
