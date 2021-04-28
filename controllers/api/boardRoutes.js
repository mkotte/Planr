const router = require('express').Router();
const { Board } = require('../../models');

// The `/api/boards` endpoint

router.get('/', async (req, res) => {
  // find all boards
  try{
    const boardData = await Board.findAll()
    res.status(200).json(boardDatat)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single board by its `id`
  try{
    const boardData = await Board.findByPK(req.params.id)
    
    if(!boardData){
      res.status(404).json({message: 'No location found with this ID!'})
      return
    }

    res.status(200).json(boardData)
  } catch (err){
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new board
  try{
    const boardData = await Board.create(req.body)
    res.status(200).json(boardData)
  } catch (err){
    res.status(400).json(err)
  }
});

router.put('/:id', async(req, res) => {
  // update a board's name by its `id` value
  try{
    const boardData = await Board.update({where: {id: req.params.id}})
    if (!boardData){
      res.status(404).json({message: 'No location found with this id!'})
    }
  } catch (err){
    res.status(404).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on board by its `id` value
  try{
    const boardData = await Board.destroy( {where: {id: req.params.id}})
    if (!categoryData){
      res.status(404).json({message:'No location found with this ID!'})
    }
  } catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;