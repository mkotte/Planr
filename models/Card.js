const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init(
    {
        // * ID (PK) 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // * Title
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // * Position
        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // * Board ID (FK)
        board_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'board',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timeStamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'card',
    }
);

module.exports = Card;