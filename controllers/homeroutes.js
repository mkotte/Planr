const router = require('express').Router();
const { Card, Board, Task, User } = require('../models');

// Required middleware for autorization
const withAuth = require('../utils/auth');

// GET for project page
router.get('/projects/:board', async (req,res) => {
    console.log(2)
    console.log(req.params.board)
    // console.log(Card)
    const cardData = await Card.findAll({where: {board_id: req.params.board}});
    const boardData = await Board.findByPk(req.params.board);
    const pageData = [];
    pageData.push(cardData);
    pageData.push(boardData);
    console.log(pageData);
    res.render('project', pageData);
})






module.exports = router;