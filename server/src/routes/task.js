const express = require('express');
const sequelize = require('../config/sequelize');
const router = express.Router();
const Task = require('../models/task')(sequelize);

// Create a new task
router.post('/', async (req, res) => {
  try {
    const taskData = req.body;
    const createdTask = await Task.create(taskData);
    res.status(201).json(createdTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', async (req,res) =>{
  try{
    const allTasks = await Task.findAll();
    res.status(200).json(allTasks);
  } catch(error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server error' });
  }
});

// Get task by ID
router.get('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByPk(taskId);

    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server error' });
  }
});

// Update task
router.put('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedData = req.body;

    const [updatedRowsCount, updatedRows] = await Task.update(updatedData, {
      where: { id: taskId },
      returning: true,
    });

    if (updatedRowsCount === 0) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.status(200).json(updatedRows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server error' });
  }
});

// Delete task
router.delete('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedRowCount = await Task.destroy({
      where: { id: taskId },
    });

    if (deletedRowCount === 0) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server error' });
  }
});

module.exports = router;
