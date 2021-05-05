const { UsersXBoards } = require('../models')

const usersBoardsData = [
    {
        userID: 1,
        boardID: 1,
    },
    {
        userID: 2,
        boardID: 1,
    },
    {
        userID: 2,
        boardID: 2,
    },
    {
        userID: 2,
        boardID: 3,
    }    
]

const seedUser = () => UsersXBoards.bulkCreate(usersBoardsData);

module.exports = seedUser;