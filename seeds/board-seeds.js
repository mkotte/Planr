const { Board } = require('../models')

const boardData = [
    {
        id: 1,
        boardName: "Example Project Board",
        boardDescription: "Pre-Seeded project board for presentation",
        user_id: 2,
    },
    {
        id: 2,
        boardName: "Project 2",
        boardDescription: "Planr - a project management (kanban style) application",
        user_id: 1,
    },
    {
        id: 3,
        boardName: "Project 3",
        boardDescription: "Soon to be the best project like ever.",
        user_id: 2,
    }
];

const seedBoard = () => Board.bulkCreate(boardData);

module.exports = seedBoard;
