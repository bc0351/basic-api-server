'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const animalsSchema = require('../collections/animals.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/code401d47-basic-api-app';

const sequelize = new Sequelize(DATABASE_URL); 

const AnimalsModel = animalsSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  AnimalsModel,
};
