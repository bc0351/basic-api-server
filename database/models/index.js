const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const envConfigs = require('../config/config');

const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = envConfigs[env];
const db = {};

const clientSchema = require('./client');
const orderSchema = require('./order');
const executionSchema = require('./execution');
const allocationSchema = require('./allocation');
const confirmationSchema = require('./confirmation');

const config =
{
  url: process.env.DATABASE_URL || 'postgres://lxylucwhxxqihb:cc46e14fd0d75fc367ab12638ef140dd34b40e516d28362144cc6a994cc7e688@ec2-52-206-182-219.compute-1.amazonaws.com:5432/dbem80ln2vujh0',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const ClientModel = clientSchema(sequelize, Sequelize.DataTypes);
const OrderModel = orderSchema(sequelize, Sequelize.DataTypes);
const ExecutionModel = executionSchema(sequelize, Sequelize.DataTypes);
const AllocationModel = allocationSchema(sequelize, Sequelize.DataTypes);
const ConfirmationModel = confirmationSchema(sequelize, Sequelize.DataTypes);

module.exports = {
  sequelize: db.sequelize,
  Sequelize: db.Sequelize,
  ClientModel,
  OrderModel,
  ExecutionModel,
  AllocationModel,
  ConfirmationModel
}
