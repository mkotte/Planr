const seedBoard = require('./board-seeds');
const seedCard = require('./card-seeds');
const seedTask = require('./task-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = () => {
    sequelize.sync({ force:true });
    console.log('\n----- DATABASE SYNCED -----\n');
    seedBoard();
    console.log('\n----- BOARDS SEEDED -----\n');
    seedCard();
    console.log('\n----- CARDS SEEDED -----\n');
    seedTask();
    console.log('\n----- TASKS SEEDED -----\n');
    seedUser();
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
};

seedAll();