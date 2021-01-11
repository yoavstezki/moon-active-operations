const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const config = require('config');
const routes = require('./routes/v1');

(async () => {
  try {
    await mongoose.connect(config.get('database'), { useNewUrlParser: true });

    const app = express();
    app.use(express.static('dist'));

    app.use(helmet());
    app.use(express.json());

    app.use('/api/v1', routes)

    app.listen(config.get('port'), () => console.log(`Listening on port ${config.get('port')}!`));
  } catch (e) {
    console.log('Server Failed', e);
  }
})()

