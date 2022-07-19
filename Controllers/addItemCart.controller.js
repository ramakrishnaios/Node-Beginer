const {Cart} = require('../Models/cart.model')
async function addItemIntoCart(req, resp) {
    let cartItem = Cart.build({ product_name: req.body.product_name, quantity: req.body.quantity, user_id: req.body.user_id })
    await cartItem.save();
    resp.send(cartItem);
}
module.exports = {addItemIntoCart}