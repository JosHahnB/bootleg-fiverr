'use strict';


const serviceProvider = (sequelize, DataTypes) => sequelize.define('Service Provider', {
  name: { type: DataTypes.STRING, required: true },
  price: { type: DataTypes.INTEGER, required: true },
  description: { type: DataTypes.STRING, required: true }
});

module.exports = serviceProvider;