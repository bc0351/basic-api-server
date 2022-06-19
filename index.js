'use strict';
const { sequelize } = require('./database/models/index');
const server = require('./src/server');
sequelize.sync().then(() => { console.log('SUCCESS'); }).catch(err=>console.error(err));
server.start();
