const { Board } = require('../models')

const boardData = [
    {
        id: 1,
        boardName: "Refactoring Practice",
        boardDescription: "Homework 1 from the OSU full-stack coding bootcamp",
    },
    {
        id: 2,
        boardName: "Project 2",
        boardDescription: "Planr - a project management (kanban style) application",
    },
    {
        id: 3,
        boardName: "Project 3",
        boardDescription: "Soon to be the best project like ever.",
    }
];

const seedBoard = () => Board.bulkCreate(boardData);

module.exports = seedBoard;
