const router = require('express').Router();
const { Board } = require('../../models');

// The `/api/boards` endpoint

// working
router.get('/', async (req, res) => {
  // find all boards
  try{
    const boardData = await Board.findAll()
    res.status(200).json(boardData)
    // res.render('filename', boardData)
  } catch (err) {
    res.status(500).json(err)
  }
});


// Working! its a lowercase k in findByPk
router.get('/:id', async (req, res) => {
  // find a single board by its `id`
  try{
    const boardData = await Board.findByPk(req.params.id)
    
    if(!boardData){
      res.status(404).json({message: 'No location found with this ID!'})
      return;
    }

    res.status(200).json(boardData)
  } catch (err){
    res.status(500).json(err)
    console.log(err);
  }
});


// working
router.post('/', async (req, res) => {
  // create a new board
  try{
    const boardData = await Board.create(req.body)
    res.status(200).json(boardData)
  } catch (err){
    res.status(500).json(err)
    console.log(err)
  }
});


// working needed req.body, before where
router.put('/:id', async(req, res) => {
  // update a board's name by its `id` value
  try{
    const boardData = await Board.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!boardData){
      res.status(404).json({message: 'No location found with this id!'})
    }
    res.status(200).json({message:'Successfully updated'})
  } catch (err){
    res.status(500).json(err)
  }
});

// working
router.delete('/:id', async (req, res) => {
  // delete on board by its `id` value
  try{
    const boardData = await Board.destroy( {where: {id: req.params.id}})
    if (!boardData){
      res.status(404).json({message:'No location found with this ID!'})
    }
    res.status(200).json({message:'Successfully deleted'})
  } catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;


