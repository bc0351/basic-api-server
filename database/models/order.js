'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      Order.hasMany(models.Execution, {
        foreignKey: 'execution_id',
        as: 'executions',
        onDelete: 'CASCADE'
      })
      Order.belongsTo(models.User, {
        foreignKey: 'client_id',
        as: 'client',
        onDelete: 'CASCADE'
      })
    }
  }
  Order.init({
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    client_name: {
      type: Sequelize.STRING
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
