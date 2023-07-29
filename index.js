'use strict';

const userModel = require('./src/auth/models/users');
const { Sequelize, DataTypes } = require('sequelize');
const serviceProviderModel = require('./src/models/service-provider');
const Collection = require('./src/models/data-collection');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);
const serviceProvider = serviceProviderModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);

module. exports = {
  db: sequelize,
  serviceProvider: new Collection(serviceProvider),
  users,
};