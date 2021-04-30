const { Board } = require('../models')

const boardData = [
    {
        id: 0,
        boardName: "Name0",
        UserID: 0,
    },
    {
        id: 1,
        boardName: "Name1",
        UserID: 1,
    },
    {
        id: 2,
        boardName: "Name2",
        UserID: 2,
    }
];

const seedBoard = () => Board.bulkCreate(boardData);

module.exports = seedBoard;
