'use strict';

const express = require('express');
const cors = require('cors');

const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/route.js');
const logger = require('../src/middleware/logger.js');

const v1Routes = require('../src/routes/v1.js');

const app = express();

app.use(cors);

app.use(express.json());
app.use(express.urlencoded({ extended: true } ));
app.use(logger);

app.use(authRoutes);
app.use('/auth/v1', v1Routes);

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  app,
  start: (port) => {
    if(!port) { throw new Error('Missing Port'); }
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  },
};