const { UsersXBoards } = require('../models')

const usersBoardsData = [
    {
        // id:1,
        userId: 1,
        boardId: 1,
    },
    {
        // id:2,
        userId: 2,
        boardId: 1,
    },
    {
        // id:3,
        userId: 2,
        boardId: 2,
    },
    {
        // id:4,
        userId: 2,
        boardId: 3,
    }    
]
// {fields: ['userId','boardId']}
const seedUsersXBoards = () => UsersXBoards.bulkCreate(usersBoardsData, );

module.exports = seedUsersXBoards;