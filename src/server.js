'use strict';
const express = require('express');
const Sequelize = require('../database/models/index');
const clientRouter = require('./routes/client-routes')

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(clientRouter);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port: ', PORT))
};
