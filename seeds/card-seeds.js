const { Board, Card } = require('../models')

const cardData = [
    {
        id: 1,
        title: "Title1",
        position: 0,
        board_id: 1
    },
    {
        id: 2,
        title: "Title2",
        position: 0,
        board_id: 1
    },
    {
        id: 3,
        title: "Title1",
        position: 0,
        board_id: 2
    },
];

const seedCard = () => Card.bulkCreate(cardData);

module.exports = seedCard;