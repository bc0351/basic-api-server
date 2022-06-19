const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
module.exports = (sequelize, DataTypes) => {
  class Confirmation extends Model {
    static associate(models) {
      // define association here
      Confirmation.belongsTo(models.Client, {
        foreignKey: 'client_id',
        as: 'client',
        onDelete: 'CASCADE'
      });
      Confirmation.belongsTo(models.Allocation, {
        foreignKey: 'allocation_id',
        as: 'allocation',
        onDelete: 'CASCADE'
      });
    }
  }
  Confirmation.init({
    confirmation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shares: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    account: DataTypes.STRING,
    name: DataTypes.STRING,
    trade_date: DataTypes.DATE,
    settle_date: DataTypes.DATE,
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_name: DataTypes.STRING,
    account: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Confirmation',
  });
  return Confirmation;
};
