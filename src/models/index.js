'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const serviceModel = require('./service-provider');
const Collection = require('./data-collection');
const userModel = require('../auth/models/user');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);
const serviceProvivder = serviceModel(sequelize, DataTypes);
const authUser = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  serviceProvivder: new Collection(serviceProvivder),
  authUser,
};