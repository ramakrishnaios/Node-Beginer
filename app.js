const express = require('express')
const db = require('./db')
const cors = require('cors')
const dbConfig = require('./config/dbConfig')
const app = express()
var bodyParser = require('body-parser')
const Cart = require('./Models/cart.model')
const { json } = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
const {userRouter} = require('./router/userRouter.router')
const {addItemCartRouter} = require('./router/addItemCart.router')

app.use('/userRouter', userRouter)
app.use('/addItemCartRouter', addItemCartRouter)

app.get('/api/getCartItems', async (req, resp) => {
    let cartItems = await Cart.findAll({
        where: {
          user_id: req.query.user_id
        }
      });
      if (cartItems.count == 0)  resp.send({'message':'No items found in cart','status_code':400});
      else resp.send(cartItems)
      
    
})
app.get('/', (req, resp) => {
    resp.send('Hello');
})
app.listen(3000, (error) => {
    if (error) {
        console.log('server not listening')
    }
    else {
        console.log('server listening at port');
    }
})