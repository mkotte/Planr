const seedBoard = require('./board-seeds');
const seedCard = require('./card-seeds');
const seedTask = require('./task-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');
const seedAll = async () => {
    await sequelize.sync({ force:true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');
     await seedBoard();
    console.log('\n----- BOARDS SEEDED -----\n');
    await seedCard();
    console.log('\n----- CARDS SEEDED -----\n');
    await seedTask();
    console.log('\n----- TASKS SEEDED -----\n');

    // await seedUsersXBoards();
    // console.log('\n----- USERSxBOARDS SEEDED -----\n');
    
    process.exit(0);
};

seedAll();