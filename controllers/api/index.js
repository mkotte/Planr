const router = require('express').Router();

//Create specific routes here
const cardRoutes = require('./cardRoutes');
const boardRoutes = require('./boardRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/api/cards', cardRoutes);
router.use('/api/boards', boardRoutes);
router.use('/api/tasks', taskRoutes);

module.exports = router;
