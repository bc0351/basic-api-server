'use strict';

const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Orders, {
        foreignKey: client_id,
        as: 'orders',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.Allocations, {
        foreignKey: client_id,
        as: 'allocations',
        onDelete: 'CASCADE'
      });
      User.hasMany(models.Confirmations, {
        foreignKey: client_id,
        as: 'confirmations',
        onDelete: 'CASCADE'
      });
    }
  }
  User.init({
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    client_name: DataTypes.STRING,
    email: DataTypes.STRING,
    account: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
