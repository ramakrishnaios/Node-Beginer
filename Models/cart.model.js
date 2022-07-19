const { DataTypes } = require('sequelize');
const db = require('../db')
const Cart = db.sequelize.define('Cart', {
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id : {
        type : DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

module.exports = {Cart}