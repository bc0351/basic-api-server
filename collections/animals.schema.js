'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('animals', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['male', 'female'],
      allowNull: true,
    },
  });
};
