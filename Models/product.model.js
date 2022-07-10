const { DataTypes } = require('sequelize')
const db = require('../db')

const Product = db.sequelize.build('Product', {
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_color: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    }) 