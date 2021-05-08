const router = require('express').Router();
const { QueryTypes } = require('sequelize');
const sequelize = require('../config/connection')
const { Card, Board, Task, User } = require('../models');

// Required middleware for autorization
const withAuth = require('../utils/auth');


router.get('/' , async (req, res) => {
  res.render('homepage')
})

// router.get(`/user`, withAuth, async (req,res) => {
//   const boardData = await Board.findAll({ where: {userId: req.session.user_id}, raw: true})
//   const userData = await User.findByPk(req.session.user_id, {raw: true, attributes: { exclude: ['password'] }})

//   res.render('user', {boardData, userData, 
//     logged_in: true
//   })
// });


// // GET for project page
// router.get('/project/:board', withAuth, async (req,res) => {
//     // const data2 = await Card.findAll()
//     // console.log(data2)

//     const data = await sequelize
//     .query(`SELECT Card.id, Card.title, Card.position, Card.board_id FROM Card 
//     WHERE card.board_id = ${req.params.board} 
//     ORDER BY position`, {type: QueryTypes.SELECT});
//     console.log(data)

//     const boardNameData = await Board.findByPk(req.params.board, {raw: true});
//     console.log(boardNameData);
//     res.render('project', {data, boardNameData,
//       logged_in: req.session.logged_in
//     });
// })

router.get('/user/:id', async (req,res) => {
    const boardData = await Board.findAll({ where: {userId: req.params.id}, raw: true})
    console.log(boardData)
    const userData = await User.findByPk(req.params.id, {raw: true})
    console.log(userData);


    res.render('user', {boardData, userData})

});

// GET for project page
router.get('/project/:board', async (req,res) => {

  const data = await sequelize
  .query(`SELECT Card.id, Card.title, Card.position, Card.board_id FROM Card 
  WHERE card.board_id = ${req.params.board} 
  ORDER BY position`, {type: QueryTypes.SELECT});
  console.log(data)

  const boardNameData = await Board.findByPk(req.params.board, {raw: true});
  console.log(boardNameData);
  res.render('project', {data, boardNameData});
})




// Prevent non logged in users from viewing the homepage
// router.get('/user', withAuth, async (req, res) => {
//     try {
//       const userData = await User.findAll({
//         attributes: { exclude: ['password'] },
//         order: [['name', 'ASC']],
//       });
  
//       const users = userData.map((project) => project.get({ plain: true }));
  
//       res.render(`users/${req.session.userId}`, {
//         users,
//         // Pass the logged in flag to the template
//         logged_in: req.session.logged_in,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });


//   router.get('/login', (req, res) => {
//     // If a session exists, redirect the request to the homepage
//     if (req.session.logged_in) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('login');
//   });

module.exports = router;

