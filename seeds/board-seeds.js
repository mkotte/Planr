const { Board } = require('../models')

const boardData = [
    {
        id: 1,
        boardName: "Project 1",
    },
    {
        id: 2,
        boardName: "Project 2",
    },
    {
        id: 3,
        boardName: "Project 3",
    }
];

const seedBoard = () => Board.bulkCreate(boardData);

module.exports = seedBoard;
