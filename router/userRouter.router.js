const {addUser} = require('../Controllers/user.controller')
const userRouter = require('express').Router()
userRouter.post('/api/user/addUser', addUser);

module.exports = {userRouter}