const bcrypt = require('bcrypt');
const usersModel = require('../models/users');

exports.create = async (req,res) => {
    const user = {
        username : req.body.username
        ,password : bcrypt.hashSync(req.body.password, 8) 
        ,role : req.body.role
        ,email: req.body.email
        ,phone: req.body.phone
        ,address: req.body.address
    }
    const userAdded = await usersModel.create(user);
    console.log('add user', userAdded);
    res.send( userAdded);
}
