const { Card, Task } = require('../models');

const taskData = [
    {
        id: 1,
        title: "little task",
        description: "we do a little task here",
        card_id: 1
    },
    {
        id: 2,
        title: "medium task",
        description: "we do a medium task here",
        card_id: 2
    },
    {
        id: 3,
        title: "big-task",
        description: "we do a big task here",
        card_id: 1,
    },
    {
        id: 4,
        title: "woah",
        description: "w0o0o0o0o0o0o0o0o0o0o0o0o0o0o0ah",
        card_id: 3
    },
    {
        id: 5,
        title: "big-task",
        description: "we do a big task here",
        card_id: 2,
    },
    {
        id: 6,
        title: "big-task",
        description: "we do a big task here",
        card_id: 1,
    },
    {
        id: 7,
        title: "big-task",
        description: "we do a big task here",
        card_id: 1,
    },
    {
        id: 8,
        title: "big-task",
        description: "we do a big task here",
        card_id: 3,
    },
    {
        id: 9,
        title: "big-task",
        description: "we do a big task here",
        card_id: 1,
    },
    {
        id: 10,
        title: "big-task",
        description: "we do a big task here",
        card_id: 1,
    }
];

const seedTask = () => Task.bulkCreate(taskData);

module.exports = seedTask;