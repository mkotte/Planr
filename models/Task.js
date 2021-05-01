const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
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
        // * Comments/Descriptions
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // * Positions (x + y needed integer)
        positionX: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        positionY: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // * Card ID (FK)
        card_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'card',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timeStamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'task',
    }
);

module.exports = Task;