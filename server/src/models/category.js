// src/models/category.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database connection setup

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Make name required
  },
}, {
  timestamps: true, // Enable timestamp fields (createdAt, updatedAt, deletedAt)
  paranoid: true,   // Enable soft deletion (deletedAt)
});

module.exports = Category;
