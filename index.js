'use strict';
const { sequelize, AnimalsModel } = require('./collections');
const server = require('./src/server');
sequelize.sync().then(() => { console.log('SUCCESS'); }).catch(err=>console.error(err));
server.start();
