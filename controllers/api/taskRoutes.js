const router = require('express').Router();
const { Task, Card } = require('../../models');

// The `/api/cards` endpoint

router.get('/', async (req, res) => {
  // find all task's
  // be sure to include its associated card data
});

router.get('/:id', async (req, res) => {
  // find a single task by its `id`
  // be sure to include its associated card data
});

router.post('/', async (req, res) => {
  // create a new task
});

router.put('/:id', async (req, res) => {
  // update a task's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on task by its `id` value
});

module.exports = router;