const { Card, Task } = require('../models');

const taskData = [
    {
        id: 0,
        title: "big-task",
        description: "we do a big task here",
        positionX: 0,
        positionY: 0,
        card_id: 0,
    },
    {
        id: 1,
        title: "little task",
        description: "we do a little task here",
        positionX: 2,
        positionY: 1,
        card_id: 0
    },
    {
        id: 2,
        title: "medium task",
        description: "we do a medium task here",
        positionX: 0,
        positionY: 0,
        card_id: 2
    },
    {
        id: 3,
        title: "woah",
        description: "w0o0o0o0o0o0o0o0o0o0o0o0o0o0o0ah",
        positionX: 0,
        positionY: 0,
        card_id: 0
    },
];

const seedTask = () => Task.bulkCreate(taskData);

module.exports = seedTask;