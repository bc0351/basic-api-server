'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allocation extends Model {
    static associate(models) {
      // define association here
      Allocation.hasOne(models.Confirmation, {
        foreignKey: 'confirmation_id',
        as: 'confirmations',
        onDelete: 'CASCADE'
      });
      Allocation.belongsToMany(models.Execution, {
        foreignKey: 'execution_id',
        as: 'executions',
        onDelete: 'CASCADE'
      })
    }
  }
  Allocation.init({
    allocation_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    shares: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    client_name: DataTypes.STRING,
    account: DataTypes.STRING,
    name: DataTypes.STRING,
    trade_date: DataTypes.DATE,
    settle_date: DataTypes.DATE,
    execution_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Allocation',
  });
  return Allocation;
};
