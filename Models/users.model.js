const { DataTypes } = require('sequelize');
const db = require('../db')
const User = db.sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id : {
        type : DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: true
});

module.exports = {User}