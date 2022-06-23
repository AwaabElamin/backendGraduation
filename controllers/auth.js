const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/users');
const private_key = 'awaabelamin';

exports.login = async (req, res) => {
    console.log("login controller");
    console.log('process.env.private_key: ', process.env.private_key)
    const { username, password } = req.body;
    console.log(`username: ${username}, password: ${password}`);
    let user = await userModel.findByUserName(username);
    if (username && password) {
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                const accessToken = jwt.sign(
                    { username, role: user.role, id: user._id },
                    process.env.private_key, { expiresIn: 4 * 60 * 60 });
                res.send({ success: true, token: accessToken, role: user.role });
            } else {
                res.send({ success: false, message: 'Wrong password' });
            }
        } else {
            res.send({ success: false, message: 'The user is not found' });
        }
    } else {
        res.send({ success: false, message: 'Please provide the username and password' })
    }
}

exports.authorize = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.private_key,(err, user)=>{
            req.user = user;
            if(err){
                console.log('err',err);
                if (err.TokenExpiredError = 'jwt expired') {
                    res.status(401).send({success:false, message:'token is expires'});
                } else {
                    res.status(403).send({success: false, message:'Forbidden'});
                }
            }else{
                next();
            }
        })
    } else {
        res.status(401).send({ success: false, message: 'Unauthenticated' });
    }
}