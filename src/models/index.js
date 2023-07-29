'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const serviceModel = require('./service-provider');
const seekerModel = require('./service-seeker');
const Collection = require('./data-collection');
const userModel = require('../auth/models/user');
const adminModel = require('../auth/models/admin');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);
const serviceProvivder = serviceModel(sequelize, DataTypes);
const serviceSeeker = seekerModel(sequelize, DataTypes);
const authUser = userModel(sequelize, DataTypes);
const authAdmin = adminModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  serviceProvivder: new Collection(serviceProvivder),
  serviceSeeker: new Collection(serviceSeeker),
  authUser,
  authAdmin,
};