const router = require('express').Router();

//Create specific routes here
const cardRoutes = require('./cardRoutes');
const boardRoutes = require('./boardRoutes');
const taskRoutes = require('./taskRoutes');

// TODO: Let Jesse fix
// router.use is declaring what route to use
// the first paramater is where we are defining our api endpoints (i.e. api/variable-goes-here)
// the second paramater is where we are pulling the information routes for the api called 
// (where are we already requiring the files including the specific routing information?)

router.use('/cards', cardRoutes);
router.use('/boards', boardRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;
