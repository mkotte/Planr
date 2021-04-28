const router = require('express').Router();

//Create specific routes here
const cardRoutes = require('./cardRoutes');
const boardRoutes = require('./boardRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/cardRoutes', cardData);
router.use('/boardRoutes', boardData);
router.use('/taskRoutes', taskData);

module.exports = router;
