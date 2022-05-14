const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

// user
const User = db.define('user', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accountNumber: {
    unique: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 1000.0,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Active',
    allowNull: false,
  },
});
module.exports = { User };
