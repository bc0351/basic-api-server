'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const animalsSchema = require('./animals.schema');

// if password necessary:  postgres://user:password@localhost:5432/401d46-api-app
// ternary:  WTF
const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/401d47-basic-api-app';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}); 

const AnimalsModel = animalsSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  AnimalsModel,
};
