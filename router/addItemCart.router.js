const {addItemIntoCart} = require('../Controllers/addItemCart.controller')
const addItemCartRouter = require('express').Router();
addItemCartRouter.post('/api/addItemCart',addItemIntoCart)
module.exports = {addItemCartRouter}