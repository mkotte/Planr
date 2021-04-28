// ### DB models
// Model's: User's, Boards(Project Boards), Cards (ToDo, InProgress, etc), Task's(post's)

// #### User's Columns/Elements
// * ID(PK)
// * Email
// * Password (Encrypted using bcrypt)
// * Username (Email or pick your own, tbd)

// #### Board's Columns/Elements
// * ID (PK)
// * Name
// * User ID's (need to think of how to give user's access to specific project boards)

// #### Card's Columns/Elements
// * ID (PK) 
// * Title
// * Position
// * Board ID (FK)

// #### Task's(Posts) Columns/Elements
// * ID (PK)
// * Title
// * Comments/Descriptions
// * Positions (x + y needed integer)
// * Card ID (FK)

// TODO: create, then import models required here
const Board = require('./Board');
const Card = require('./Card');
const Task = require('./Task');
const User = require('./User');

// TODO: declare associations here

//board/card relationship
Board.hasMany(Card, {
    foreignKey: 'board_id',
});

Card.belongsTo(Board, {
    foreignKey: 'board_id',
});


//card/task relationship
Card.hasMany(Task, {
    foreignKey: 'card_id',
});

Task.belongsTo(Card, {
    foreignKey: 'card_id',
});


// TODO: export module here
module.exports = { Board, Card, Task, User };