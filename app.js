const express = require('express')
const db = require('./db')
const cors = require('cors')
const dbConfig = require('./config/dbConfig')
const app = express()
var bodyParser = require('body-parser')
const uuidjs = require('uuidjs')
const User = require('./Models/users.model')
const Cart = require('./Models/cart.model')
const { json } = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/api/addUser', async (req, resp) => {
    let user = User.build({ firstName: req.body.firstName, lastName: req.body.lastName, user_id: uuidjs.generate()})
    await user.save();
    resp.send(user)
});
app.post('/api/addItemCart', async (req, resp) => {
    let cartItem = Cart.build({ product_name: req.body.product_name, quantity: req.body.quantity, user_id: req.body.user_id })
     await cartItem.save();
     resp.send(cartItem);
});
app.get('/api/getCartItems', async (req, resp) => {
    let cartItems = await Cart.findAll({
        where: {
          user_id: req.query.user_id
        }
      });
    //   console.log('cartItems.count',cartItems)
      if (cartItems.count == 0)  resp.send({'message':'No items found in cart'});
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