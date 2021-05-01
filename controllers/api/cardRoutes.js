// Complete this page first, all routes here will easily translate to the other api controllers.
const router = require('express').Router();
const { Card, Board } = require('../../models');

// The `/api/cards` endpoint

// working! commented out after findAll() added a new include line of code
router.get('/', async (req, res) => {
// find all cards
// be sure to include its associated Board data
  try {
    const cardData = await Card.findAll({
      include: [{model: Board}]
    })//({include: {board: {boardName: boardName}}})
    res.status(200).json(cardData)
  } catch (err) {
    res.status(500).json(err)
  }
})  

// Working!
router.get('/:id', async (req, res) => {
  // find a single card by its `id`
  // be sure to include its associated Board data

  try {
    const cardData = await Card.findByPk(req.params.id, {
      include: Board
    })

    if(!cardData) {
      res.status(404).json({message: 'No location found with this id!'})
      return
    }

    res.status(200).json(cardData)

  } catch (err){
    res.status(500).json(err)
  }
});

// Working!
router.post('/', async (req, res) => {
  // create a new card
  try {
    const cardData = await Card.create(req.body)
    res.status(200).json(cardData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// TODO: DEBUG!
router.put('/:id', async (req, res) => {
  // update a card's name by its `id` value
  try {
    const cardData = await Card.update({where: {id: req.params.id}})
    if (!cardData){
      res.status(404).json({message: 'No location found with this ID!'})
    }
    res.status(200).json({message:'Successfully updated'})
  } catch (err) {
    res.status(500).json(err)
  }
});

// Working req auto completed to some crazy function
router.delete('/:id', async (req, res) => {
  // delete on card by its `id` value
  try {
    const cardData = await Card.destroy( {where: {id: req.params.id}} )
    if(!cardData){
      res.status(404).json({ message: 'No location found with this id!'})
    }
    res.status(200).json({message:'Successfully deleted'})
  } catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;