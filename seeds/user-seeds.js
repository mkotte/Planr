const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: "jrutter",
        email: "jrutter@email.email",
        password: "jrpassword!",
    },
    {
        id: 2,
        username: "mkotte",
        email: "mkotte@email.email",
        password: "mkpassword#",
    },
    {
        id: 3,
        username: "schimmoeller",
        email: "mschimmoeller@email.com",
        password: "mspassword@"
    },
    {
        id: 4,
        username: "adecapite",
        email: "adecapite@email.email",
        password: "adpassword$",
    },
    {
        id: 5,
        username: 'hersheyp',
        email: 'harshp@email.com',
        password: 'password123'
    }
];

const seedUser = async () => {
    // await sequelize.sync({ force: true })

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    })
}

module.exports = seedUser;
