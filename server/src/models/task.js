// src/models/task.js
'use strict';
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Task = sequelize.define('Task', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: { type: DataTypes.STRING, allowNull: false },
    priority: DataTypes.INTEGER,
    description: { type: DataTypes.STRING, allowNull: false },
    createdBy: { type: DataTypes.STRING, allowNull: false },
    updatedBy: DataTypes.STRING,
    deletedBy: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    deletedAt: DataTypes.DATE,
    estCompletedAt: DataTypes.DATE,
    actCompletedAt: DataTypes.DATE,
    assignee: DataTypes.STRING,
  });
  return Task;
};
