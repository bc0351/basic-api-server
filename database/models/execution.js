'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Execution extends Model {
    static associate(models) {
      // define association here
      Execution.hasMany(models.Allocation, {
        foreignKey: 'allocation_id',
        as: 'allocations',
        onDelete: 'CASCADE'
      });
      Execution.belongsToMany(models.Order, {
        foreignKey: 'order_id',
        as: 'order',
        onDelete: 'CASCADE',
      })
    }
  }
  Execution.init({
    execution_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    trade_date: DataTypes.DATE,
    settle_date: DataTypes.DATE,
    settle_price: DataTypes.FLOAT,
    trade_amount: DataTypes.FLOAT,
    settle_amount: DataTypes.FLOAT,
    commission: DataTypes.FLOAT,
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Execution',
  });
  return Execution;
};
