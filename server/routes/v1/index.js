const express = require('express');
const operationRoutes = require('./operation');

const router = express.Router();

router.use('/operation', operationRoutes)

module.exports = router;
