const {User} = require('../Models/users.model')
const uuidjs = require('uuidjs')
async function addUser(req, resp) {
    if (req.body.lastName == null) {
        resp.send({'message': 'lastname is empty','status_code':400})
    }
    let user = User.build({ firstName: req.body.firstName, lastName: req.body.lastName, user_id: uuidjs.generate()})
    await user.save();
    resp.send(user)
}

module.exports = {addUser}