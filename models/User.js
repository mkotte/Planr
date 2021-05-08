const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        // * ID(PK)
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // * Username (Email or pick your own, tbd) 
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // * Email
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        // * Password (Encrypted using bcrypt)
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [/*need to decide a length for passwords*/],
            // },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
        
               newUser.password = await bcrypt.hash(newUser.password, 10)
               return newUser
            },
            beforeUpdate: async (updatedUser) => {
                updatedUser.password = await bcrypt.hash(updatedUser.password, 10)
                return updatedUser
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;