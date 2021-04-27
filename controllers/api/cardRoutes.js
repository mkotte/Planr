// Complete this page first, all routes here will easily translate to the other api controllers.
const router = require('express').Router();
const { Card, Board } = require('../../models');

// The `/api/cards` endpoint

router.get('/', async (req, res) => {
  // find all cards
  // be sure to include its associated Board data
});

router.get('/:id', async (req, res) => {
  // find a single card by its `id`
  // be sure to include its associated Board data
});

router.post('/', async (req, res) => {
  // create a new card
});

router.put('/:id', async (req, res) => {
  // update a card's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on card by its `id` value
});

module.exports = router;