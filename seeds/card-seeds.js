const { Board, Card } = require('../models')

const cardData = [
    {
        id: 1,
        title: "Completed",
        position: 3,
        board_id: 1
    },
    {
        id: 2,
        title: "In Progress",
        position: 2,
        board_id: 1
    },
    {
        id: 3,
        title: "To-Do",
        position: 1,
        board_id: 1
    },
    {
        id: 4,
        title: "Resources",
        position: 5,
        board_id: 1
    },
    {
        id: 5,
        title: "Done + Reviewed",
        position: 4,
        board_id: 1
    },
    {
        id: 6,
        title: "Title1",
        position: 3,
        board_id: 2
    }
];

const seedCard = () => Card.bulkCreate(cardData);

module.exports = seedCard;