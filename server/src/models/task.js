// src/models/task.js
'use strict';
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    description: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING,
    deletedBy: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    estCompletedAt: DataTypes.DATE,
    actCompletedAt: DataTypes.DATE,
    assignee: DataTypes.STRING,
  });
  return Task;
};
