const { Card, Task } = require('../models');

const taskData = [
    {
        id: 1,
        title: "Little Task",
        description: "We have a little task here",
        card_id: 3,
    },
    {
        id: 2,
        title: "Medium Task",
        description: "We have a medium task here",
        card_id: 2,
    },
    {
        id: 3,
        title: "Big Task",
        description: "We have a big task here",
        card_id: 1,
    },
    {
        id: 4,
        title: "Woah",
        description: "This drag and drop functionality is sort of cool..!",
        card_id: 4,
    },
    {
        id: 5,
        title: "Huge Task",
        description: "we have a huge task here",
        card_id: 1,
    },
    {
        id: 6,
        title: "Tiny Task",
        description: "we cant find the tiny task here, its too small",
        card_id: 3,
    },
    {
        id: 7,
        title: "Wait",
        description: "Did I mention the drag and drop functionality is super cool?",
        card_id: 4,
    },
    
];

const seedTask = () => Task.bulkCreate(taskData);

module.exports = seedTask;