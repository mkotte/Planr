const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// class UsersXBoards extends Model {}

UsersXBoards = sequelize.define(
    "usersxboards"
)


module.exports = UsersXBoards;