// src/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database connection setup

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tasks: {
    type: DataTypes.JSON, // Store tasks as a JSON array
    defaultValue: [],    // Default value is an empty array
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,     // Default score is 0
  },
  email: {
    type: DataTypes.STRING,
    unique: true,         // Ensure email is unique
    allowNull: false,    // Make email required
  },
});

module.exports = User;
