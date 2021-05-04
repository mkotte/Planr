const { Board, Card } = require('../models')

const cardData = [
    {
        id: 1,
        title: "Title1",
        position: 3,
        board_id: 1
    },
    {
        id: 2,
        title: "Title2",
        position: 2,
        board_id: 1
    },
    {
        id: 3,
        title: "Title2",
        position: 1,
        board_id: 1
    },
    {
        id: 4,
        title: "Title2",
        position: 5,
        board_id: 1
    },
    {
        id: 5,
        title: "Title2",
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