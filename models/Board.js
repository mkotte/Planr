const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Board extends Model {}

Board.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        boardName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        UserID: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        // * User ID's (need to think of how to give user's access to specific project boards)
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'board',
    }
);

module.exports = Board;