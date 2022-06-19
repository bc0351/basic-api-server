'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
module.exports = (sequelize, DataTypes) => {
  class Allocation extends Model {
    static associate(models) {
      // define association here
      Allocation.hasOne(models.Confirmation, {
        foreignKey: 'confirmation_id',
        as: 'confirmations',
        onDelete: 'CASCADE'
      });
      Allocation.belongsTo(models.Execution, {
        foreignKey: 'execution_id',
        as: 'executions',
        onDelete: 'CASCADE'
      })
    }
  }
  Allocation.init({
    allocation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shares: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_name: DataTypes.STRING,
    account: DataTypes.STRING,
    name: DataTypes.STRING,
    trade_date: DataTypes.DATE,
    settle_date: DataTypes.DATE,
    execution_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Allocation',
  });
  return Allocation;
};
