const { Board } = require('../models')

const boardData = [
    {
        id: 1,
        boardName: "Name0",
        UserID: 1,
    },
    {
        id: 2,
        boardName: "Name2",
        UserID: 2,
    },
    {
        id: 3,
        boardName: "Name3",
        UserID: 3,
    }
];

const seedBoard = () => Board.bulkCreate(boardData);

module.exports = seedBoard;
