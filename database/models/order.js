'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      Order.hasMany(models.Execution, {
        foreignKey: 'execution_id',
        as: 'executions',
        onDelete: 'CASCADE'
      })
      Order.belongsTo(models.Client, {
        foreignKey: 'client_id',
        as: 'client',
        onDelete: 'CASCADE'
      })
    }
  }
  Order.init({
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_name: {
      type: DataTypes.STRING
    },
    account: DataTypes.STRING,
    buysell: DataTypes.STRING,
    shares: DataTypes.INTEGER,
    trade_price: DataTypes.FLOAT,
    name: DataTypes.STRING,
    order_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
