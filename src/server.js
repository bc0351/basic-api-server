'use strict';
const express = require('express');
const Sequelize = require('../database/models/index');
const animalsRouter = require('./routes/animals');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(animalsRouter);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port: ', PORT))
};
