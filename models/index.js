
const Board = require('./Board');
const Card = require('./Card');
const Task = require('./Task');
const User = require('./User');

// board-card associations
Card.belongsTo(Board, {
    foreignKey: 'board_id',
});

Board.hasMany(Card, {
    foreignKey: 'board_id',
});

// card-task associations
Task.belongsTo(Card, {
    foreignKey: 'card_id',
});

Card.hasMany(Task, {
    foreignKey: 'card_id',
});

// user-board associations
Board.belongsTo(User, {
    foreignKey: 'userId',
});

User.hasMany(Board, {
    foreignKey: 'userId',
});


module.exports = { Board, Card, Task, User };