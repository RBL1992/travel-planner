const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        trip_budget: {
            type: DataTypes.INTEGER,
          },
        traveller_amount: {
            type: DataTypes.INTEGER,
        },  
        traveler_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Traveller',
                key: 'id',
                unique: false
              },
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Location',
                key: 'id',
                unique: false
              },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Trip',
    }
);

module.exports = Trip;