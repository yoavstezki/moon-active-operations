const faker = require('faker');
const httpStatus = require('http-status');
const times = require('lodash/times');
const sample = require('lodash/sample');

const Operation = require('../../../models/operation');
const { OPERATION_TYPES } = require('../../../enums') ;

const createOperation = () => ({
  name: faker.internet.userName(),
  type: sample(OPERATION_TYPES),
  startDate: faker.date.past(),
  endDate: faker.date.future(),
  userGroupName: faker.company.companyName(),
})

module.exports = async (req, res) => {
  const operations = times(10000, createOperation);
  await Operation.insertMany(operations);

  res.status(httpStatus.NO_CONTENT).send({});
}
