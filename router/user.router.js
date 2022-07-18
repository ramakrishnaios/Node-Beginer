const {addUser} = require('./Controllers/user.controller')
const express = require('express')
const userRouter = express.Router()
userRouter.post('/api/user/addUser', (req, resp) => {
    console.log(req)
    addUser(req,resp)
  });

  module.exports = {userRouter}