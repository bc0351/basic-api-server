'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
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
  }, {});
  Order.associate = function (models) {
    // define association here
    Order.hasMany(models.Execution, {
      foreignKey: 'execution_id',
      as: 'execution',
      onDelete: 'CASCADE'
    })
    Order.belongsTo(models.Client, {
      foreignKey: 'client_id',
      as: 'client',
      onDelete: 'CASCADE'
    })
  }
  return Order;
};
