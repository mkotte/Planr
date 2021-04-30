const router = require('express').Router();

//Create specific routes here
const cardRoutes = require('./cardRoutes');
const boardRoutes = require('./boardRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/cards', cardRoutes);
router.use('/boards', boardRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;
