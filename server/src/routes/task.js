// src/routes/task.js
const express = require('express');
const router = express.Router();

// Temporary array to store tasks
const tasks = [];

// Create a new task
router.post('/', (req, res) => {
  try {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Read all tasks
router.get('/', (req, res) => {
  try {
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Read a single task by ID
router.get('/:id', (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(task);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a task by ID
router.put('/:id', (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
    const taskIndex = tasks.findIndex((t) => t.id === taskId);
    if (taskIndex === -1) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
      res.json(tasks[taskIndex]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a task by ID
router.delete('/:id', (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);
    if (taskIndex === -1) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      tasks.splice(taskIndex, 1);
      res.status(204).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
