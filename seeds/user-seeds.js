const { User } = require('../models');

const userData = [
    {
        id: 0,
        username: "jrutter",
        email: "jrutter@email.email",
        password: "jrpassword!",
    },
    {
        id: 1,
        username: "schimmoeller",
        email: "mschimmoeller@email.com",
        password: "mspassword@",
    },
    {
        id: 2,
        username: "mkotte",
        email: "mkotte@email.email",
        password: "mkpassword#",
    },
    {
        id: 3,
        username: "adecapite",
        email: "adecapite@email.email",
        password: "adpassword$",
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
