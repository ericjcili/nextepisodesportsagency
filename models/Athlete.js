const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Athlete extends Model {}

Athlete.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ath_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ath_desc: {
            type: DataTypes.TEXT,
        },
        ath_info: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        pic_title: {
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'athlete'
    }
)

module.exports = Athlete;