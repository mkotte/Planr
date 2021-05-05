const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UsersXBoards extends Model {}

UsersXBoards.init(
    {
        userID: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        boardID: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'Board',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timeStamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'board',
    }
)


module.exports = Board;