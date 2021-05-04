const router = require('express').Router();
const { QueryTypes } = require('sequelize');
const sequelize = require('../config/connection')
const { Card, Board, Task, User } = require('../models');

// Required middleware for autorization
const withAuth = require('../utils/auth');

// GET for project page
router.get('/projects/:board', async (req,res) => {
    const data = await sequelize
    .query(`SELECT Card.id, Card.title, Card.position, Card.board_id  FROM Card 
    INNER JOIN Board ON Card.Board_id = Board.id 
    WHERE card.board_id = ${req.params.board} 
    ORDER BY position`, {type: QueryTypes.SELECT});
    
    res.render('project', {data});
})






module.exports = router;