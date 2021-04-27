const router = require('express').Router();
const { Board } = require('../../models');

// The `/api/boards` endpoint

router.get('/', async (req, res) => {
  // find all boards
});

router.get('/:id', async (req, res) => {
  // find a single board by its `id`
});

router.post('/', async (req, res) => {
  // create a new board
});

router.put('/:id', async(req, res) => {
  // update a board's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on board by its `id` value
});

module.exports = router;