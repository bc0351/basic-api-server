'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('animals', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['male', 'female'],
      allowNull: true,
    },
  });
};
