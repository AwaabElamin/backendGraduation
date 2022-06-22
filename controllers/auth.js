const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/users');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    console.log(`username: ${username}, password: ${password}`);

    if (username && password) {
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                const accessToken = jwt.sign(
                    { username, role: user.role, id: user._id },
                    PRIVATE_KEY, { expiresIn: 4 * 60 * 60 });
                res.send({ success: true, token: accessToken });
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