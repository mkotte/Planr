const router = require('express').Router();
const { Card, Board, Task, User } = require('../models');

// Required middleware for autorization
const withAuth = require('../utils/auth');

// GET for project page
route.get('/', async (req,res) => {
    res.render('project')
})






module.exports = router;