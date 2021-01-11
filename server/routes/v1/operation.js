const express = require('express');

const handlers = require('./handlers');

const router = express.Router();

router
  .get('/', handlers.getOperations)
  .get('/schema', handlers.getOperationSchema)
  .put('/:id', handlers.updateOperation)
  .delete('/:id', handlers.deleteOperation)
  .post('/insertData', handlers.insertOperations)
  .post('/:id/duplicate', handlers.duplicateOperation)

module.exports = router;
