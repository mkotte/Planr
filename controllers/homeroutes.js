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

<<<<<<< HEAD
=======
<<<<<<< HEAD
// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']],
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        users,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

=======
>>>>>>> 7dcd917348ced7b08b36ab2b921d5dc4dfe15b85
>>>>>>> 95a4dacc19313703b05988dace89b3cb2049b06c
module.exports = router;