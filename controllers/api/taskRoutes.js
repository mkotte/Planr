const router = require('express').Router();
const { Task, Card } = require('../../models');

// The `/api/cards` endpoint

// Working
router.get('/', async (req, res) => {
  // find all task's
  // be sure to include its associated card data
  try{
    const taskData = await Task.findAll()
    res.status(200).json(taskData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// Working
router.get('/:id', async (req, res) => {
  // find a single task by its `id`
  // be sure to include its associated card data
  try{
    const taskData = await Task.findByPk(req.params.id, {
      include: Card
    })

    if(!taskData) {
      res.status(404).json({message: 'No location found with this ID!'})
      return
    }
    res.status(200).json(taskData)
  } catch (err){
    res.status(500).json(err)
  }
});

// Working
router.post('/', async (req, res) => {
  // create a new task
  try{
    const taskData = await Task.create(req.body)
    res.status(200).json(taskData)
  } catch (err){
    res.status(500).json(err)
  }
});

// working, same issue as board
router.put('/:id', async (req, res) => {
  // update a task's name by its `id` value
  try{
    const taskData = await Task.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!taskData){
      res.status(404).json({message: 'No location found with this ID!'})
    }
    res.status(200).json({message:'Successfully updated'})
  } catch(err){
    res.status(500).json(err)
  }
});

// Working
router.delete('/:id', async (req, res) => {
  // delete on task by its `id` value
  try{
    const taskData = await Task.destroy({where: {id: req.params.id}})
    if (!taskData){
      res.status(404).json({message: 'No location found with this ID!'})
    }
    res.status(200).json({message:'Successfully deleted'})
  } catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;