'use strict';
const express = require('express');
const Sequelize = require('sequelize');
const errorHandler = require('./error-handlers/500');
const notFoundHanlder = require('./error-handlers/404');
const animalsRouter = require('./routes/animals');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(animalsRouter);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port: ', PORT))
};
