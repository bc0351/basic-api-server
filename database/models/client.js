'use strict';

const { Sequelize, DataTypes, Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      // define association here
      Client.hasMany(models.Order, {
        foreignKey: 'client_id',
        as: 'orders',
        onDelete: 'CASCADE',
      });
      Client.hasMany(models.Allocation, {
        foreignKey: 'client_id',
        as: 'allocations',
        onDelete: 'CASCADE'
      });
      Client.hasMany(models.Confirmation, {
        foreignKey: 'client_id',
        as: 'confirmations',
        onDelete: 'CASCADE'
      });
    }
  }
  Client.init({
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_name: DataTypes.STRING,
    email: DataTypes.STRING,
    account: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
